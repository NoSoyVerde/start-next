import react from "react";


export default function Ruta1Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
    </>
  );
}
//ruta1
//RootLayout -> Ruta1Layout -> page.tsx -> otro.tsx
