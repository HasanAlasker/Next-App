"use client";
import { CldImage, CldUploadWidget } from "next-cloudinary";
import Btn from "../components/Btn";
import { useState } from "react";

export default function UploadPage() {
  const [publicId, setPublicId] = useState("");

  return (
    <>
      {publicId && <CldImage src={publicId} alt="" width={400} height={250} />}
      <CldUploadWidget
        uploadPreset="NextApp"
        options={{
          sources: ["local", "camera"],
          multiple: true,
          maxFiles: 4,
          defaultSource: "local",
          cropping: true,
          showAdvancedOptions: false,
          clientAllowedFormats: ["jpg", "png"],
        }}
        onSuccess={(result) => {
          if (!result.event) return;
          const info = result.info as { public_id: string };
          setPublicId(info.public_id);
        }}
      >
        {({ open }) => <Btn type="pri" title="Upload Image" onClick={open} />}
      </CldUploadWidget>
    </>
  );
}

// "use client";
// import { CldUploadWidget } from "next-cloudinary";
// import Btn from "../components/Btn";

// export default function UploadPage() {
//   const options = {
//     clientAllowedFormats: "image",
//     sources: ["local", "camera"],
//     multiple: false,
//     maxFiles: 1,
//     styles: {
//       palette: {
//         window: "#FFFFFF",
//         windowBorder: "#6A7481",
//         tabIcon: "#3448C5",
//         menuIcons: "#5A616A",
//         textDark: "#000000",
//         textLight: "#FFFFFF",
//         link: "#3448C5",
//         action: "#3448C5",
//         error: "#F44235",
//         complete: "#20B832",
//         sourceBg: "#F5FAFE"
//       },
//       fonts: {
//         default: null,
//         "'Fira Sans', sans-serif": {
//           url: "https://fonts.googleapis.com/css?family=Fira+Sans",
//           active: true
//         }
//       }
//     }
//   };

//   return (
//     <CldUploadWidget uploadPreset="NextApp" options={options}>
//       {({ open }) => <Btn type="pri" title="Upload Image" onClick={open} />}
//     </CldUploadWidget>
//   );
// }
