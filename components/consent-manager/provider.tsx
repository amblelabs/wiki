"use client";

import { type ReactNode } from "react";
import {
  ConsentBanner,
  ConsentDialog,
  ConsentManagerProvider,
  policyPackPresets,
} from "@c15t/nextjs";
import { gtag } from "@c15t/scripts/google-tag";
import { DevTools } from "@c15t/dev-tools/react";

const scripts = [
  gtag({
    id: "G-ZWTBEK75YY",
    category: "measurement",
  }),
];

export default function ConsentProvider({ children }: { children: ReactNode }) {
  return (
    <ConsentManagerProvider
      options={{
        mode: "offline",
        consentCategories: ["necessary", "measurement"],
        scripts,
        offlinePolicy: {
          policyPacks: [
            policyPackPresets.europeOptIn(),
            policyPackPresets.californiaOptOut(),
            policyPackPresets.worldNoBanner(),
          ],
        },
        theme: {
          colors: {
            primary: "#ff8c00",
            primaryHover: "#e67e00",
            switchTrack: "#e67e00",
            switchTrackActive: "#e67e00",
          },
          dark: {
            primary: "#ff8c00",
            primaryHover: "#e67e00",
            switchTrack: "#e67e00",
            switchTrackActive: "#e67e00",
          },
          consentActions: {
            default: { variant: "neutral", mode: "ghost" },
            accept: { variant: "primary", mode: "filled" },
            customize: { variant: "neutral", mode: "stroke" },
          },
        },
      }}
    >
      <ConsentBanner
        primaryButton={"accept"}
        layout={[["reject", "customize"], "accept"]}
        hideBranding={true}
        title={"Cookies! 🍪"}
        description={
          "We use cookies to improve your browsing experience and analyze site traffic!"
        }
      />
      <ConsentDialog hideBranding={true} />
      {children}
      {process.env.NODE_ENV === "development" && (
        <DevTools
          position="bottom-right" // 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
          defaultOpen={false} // Start with panel open
          namespace="c15tStore" // Store namespace to connect to
          disabled={false} // Disable without removing from tree
        />
      )}
    </ConsentManagerProvider>
  );
}
