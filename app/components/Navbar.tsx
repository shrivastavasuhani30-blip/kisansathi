import Link from "next/link";
import Image from "next/image";

interface NavbarProps {
  rightLink?: { href: string; label: string };
}

export default function Navbar({ rightLink }: NavbarProps) {
  return (
    <nav style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "12px 24px",
      borderBottom: "1px solid #E5E0D8",
      background: "#FAF7F2",
      position: "sticky",
      top: 0,
      zIndex: 100,
    }}>
      {/* Logo + Brand */}
      <Link href="/" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}>
        <Image
          src="/kisansathi-logo.svg"
          alt="KisanSathi Logo"
          width={40}
          height={34}
          style={{ objectFit: "contain" }}
          priority
        />
        <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.1 }}>
          <span style={{ fontSize: "17px", fontWeight: 700, color: "#0D1F0D", letterSpacing: "0.3px" }}>
            KisanSathi
          </span>
          <span style={{ fontSize: "10px", color: "#5D7A5D", letterSpacing: "0.5px" }}>
            किसान का डिजिटल साथी
          </span>
        </div>
      </Link>

      {/* Right nav link */}
      {rightLink && (
        <Link href={rightLink.href} style={{
          fontSize: "13px",
          color: "#4A4540",
          textDecoration: "none",
          padding: "6px 14px",
          borderRadius: "20px",
          border: "1px solid #E5E0D8",
          background: "white",
          fontWeight: 500,
        }}>
          {rightLink.label}
        </Link>
      )}
    </nav>
  );
}
