import Image from 'next/image'

export default function Home() {
  const src = "https://preview.redd.it/p4nxklz18z161.jpg?width=640&crop=smart&auto=webp&s=0cc1daae30269488f127e29e2db48e201456bf40";

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Image width="640" height="853" src={src} />
    </div>
  )
}
