import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";

const ROOT = process.cwd();
const SANITY = "https://cdn.sanity.io/images/qe6uzeuy/production/";
const NITEX = "https://nitex.com";

// Editorial photos -> public/images (capped width to keep files reasonable)
const photos = [
  "0265bf6430889d8accd740f80281e60a55ff1db9-1920x2400.jpg", // hero left - woman in cap
  "0a5607f6281ac82775774b4d87b61332ee5b0832-2143x2679.jpg",
  "ad2ed937b1a767d90cdeb432397a3c2e5257a23a-1792x2140.jpg",
  "df2fd426207db409441ac898248cca694e624cd6-2016x3024.jpg",
  "5c2a7e6c45d3a6e30637a51acf6ec34698b11c6f-1958x2937.jpg",
  "b9e9f54960628c42131e8d98065b21b759a1f676-2496x3744.jpg",
  "60a6b81f5082c157493af02f17589f6d6db5c3d4-2731x4096.png",
];

// Brand / partner logos -> public/images/logos (keep original)
const logos = [
  "cc278a08ffb7ec8cd11d55916671d5f223bd058b-418x120.png",
  "f4aa13cc56b3b067a85773c8e5d68b7f018f5f73-1000x143.png",
  "831bede73c64cd0dcb28adfad0bef901e870bc17-700x134.png",
  "f55b2a454bcb55511735e954c9de86571d3c8ca9-2500x289.svg",
  "453aefa2dfd5b6efe71bb974a74ac73953b67ae7-450x240.webp",
  "b4a6b4a3150c111069d1e54ee4f773cf0837d74c-2560x787.png",
  "1fc941fbe6a24570909c291bd42acea307f1c4e6-900x157.png",
  "866711e1e8b2e931781b7f7351bcb06cd37667c9-1000x155.png",
  "347011a8b4f12f9750c9b0840985418d055c135b-1200x328.png",
  "b08b3fbfcafd50b4aee4c523fc7a89d59c145656-920x179.png",
];

const muxThumbs = [
  "7OaJIAbEFlwm89u02LWFBwN202WNebevvWafp3KWfcMdo",
  "a7mx01u01DVdCq1kNxOcQ1GgJe008xRj01iiFneekP5wudI",
];

const fonts = [
  "/fonts/PPNeueMontreal-Regular.woff2",
  "/fonts/FragmentMono-Regular.woff2",
  "/fonts/FragmentMono-Italic.woff2",
  "/fonts/PPRightGrotesk-SpatialBlack.woff2",
];

const favicons = ["/favicon-black.svg", "/favicon-white.svg"];

const jobs = [];
for (const f of photos)
  jobs.push([`${SANITY}${f}?w=1400&q=80&auto=format`, join("public/images", f.replace(/\.\w+$/, ".jpg"))]);
for (const f of logos) jobs.push([`${SANITY}${f}`, join("public/images/logos", f)]);
for (let i = 0; i < muxThumbs.length; i++)
  jobs.push([`https://image.mux.com/${muxThumbs[i]}/thumbnail.webp?width=1400`, join("public/images", `mux-${i + 1}.webp`)]);
for (const f of fonts) jobs.push([`${NITEX}${f}`, join("public/fonts", f.split("/").pop())]);
for (const f of favicons) jobs.push([`${NITEX}${f}`, join("public/seo", f.replace(/^\//, ""))]);

async function download([url, rel]) {
  const dest = join(ROOT, rel);
  await mkdir(dirname(dest), { recursive: true });
  const res = await fetch(url, { headers: { "User-Agent": "Mozilla/5.0" } });
  if (!res.ok) throw new Error(`${res.status} ${url}`);
  const buf = Buffer.from(await res.arrayBuffer());
  await writeFile(dest, buf);
  return `${rel} (${(buf.length / 1024).toFixed(0)} KB)`;
}

const results = [];
for (let i = 0; i < jobs.length; i += 4) {
  const batch = jobs.slice(i, i + 4);
  const settled = await Promise.allSettled(batch.map(download));
  settled.forEach((s, j) => {
    if (s.status === "fulfilled") results.push("OK   " + s.value);
    else results.push("FAIL " + jobs[i + j][0] + " :: " + s.reason.message);
  });
}
console.log(results.join("\n"));
console.log(`\nDone: ${results.filter((r) => r.startsWith("OK")).length}/${jobs.length}`);
