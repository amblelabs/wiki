/**
 * https://github.com/kane50613/takumi/blob/master/takumi-template/src/templates/docs-template.tsx
 */
import type { ReactNode } from "react";

export default function DocsTemplate({
  title,
  description,
  icon,
  primaryColor,
  backgroundColor,
  primaryTextColor,
  site,
  siteType,
}: {
  title: ReactNode;
  description: ReactNode;
  icon: ReactNode;
  primaryColor: string;
  backgroundColor: string;
  primaryTextColor: string;
  site: ReactNode;
  siteType: ReactNode;
}) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "#0a0a0a",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        color: "white",
        backgroundImage: `radial-gradient(circle at 10% 10%, ${backgroundColor} 0%, #0a0a0a 60%)`,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
          padding: "90px 60px 90px 60px",
          position: "relative",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "32px",
            marginBottom: "40px",
            textWrap: "pretty",
          }}
        >
          <span
            style={{
              fontSize: 72,
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-0.04em",
              color: "white",
            }}
          >
            {title}
          </span>
          <span
            style={{
              fontSize: 44,
              color: "#a1a1aa",
              fontWeight: 400,
              lineHeight: 1.4,
              maxWidth: "95%",
              letterSpacing: "-0.01em",
              lineClamp: 2,
              textOverflow: "ellipsis",
              overflow: "hidden",
            }}
          >
            {description}
          </span>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "28px",
          }}
        >
          {icon}
          <span
            style={{
              fontSize: 32,
              fontWeight: 700,
              letterSpacing: "-0.02em",
              color: "white",
              opacity: 0.9,
            }}
          >
            {site}
          </span>
          <div style={{ display: "flex", flexGrow: 1 }} />
          <div
            style={{
              display: "flex",
              height: 4,
              width: 60,
              backgroundColor: primaryColor,
              borderRadius: 2,
            }}
          />
          <span
            style={{
              fontSize: 22,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.2em",
              color: primaryTextColor,
              opacity: 0.8,
            }}
          >
            {siteType}
          </span>
        </div>
      </div>
    </div>
  );
}
