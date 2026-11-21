import type { ReactNode } from 'react';
import {
  ConsentBanner,
  ConsentDialog,
  ConsentProvider as C15tConsentProvider,
  offline,
} from '@c15t/react';
import { policyRulePresets } from 'c15t';
import { gtag } from '@c15t/scripts/google-tag';
import { DevTools } from '@c15t/dev-tools/react';

const scripts = [
  gtag({
    id: 'G-ZWTBEK75YY',
    category: 'measurement',
  }),
];

export default function ConsentProvider({ children }: { children: ReactNode }) {
  return (
    <C15tConsentProvider
      options={{
        mode: offline({
          policyRules: [
            policyRulePresets.europeOptIn(),
            policyRulePresets.californiaOptOut(),
            policyRulePresets.worldOptOutNoPrompt(),
          ],
        }),
        consentCategories: ['necessary', 'measurement'],
        scripts,
        theme: {
          colors: {
            primary: '#ff8c00',
            primaryHover: '#e67e00',
            switchTrack: '#e67e00',
            switchTrackActive: '#e67e00',
          },
          dark: {
            primary: '#ff8c00',
            primaryHover: '#e67e00',
            switchTrack: '#e67e00',
            switchTrackActive: '#e67e00',
          },
          consentActions: {
            default: { variant: 'neutral', mode: 'ghost' },
            accept: { variant: 'primary', mode: 'filled' },
            customize: { variant: 'neutral', mode: 'stroke' },
          },
        },
      }}
    >
      <ConsentBanner
        primaryButton="accept"
        layout={[['reject', 'customize'], 'accept']}
        hideBranding={true}
        title="Cookies! 🍪"
        description="We use cookies to improve your browsing experience and analyze site traffic!"
      />
      <ConsentDialog hideBranding={true} />
      {children}
      {import.meta.env.DEV && (
        <DevTools
          position="bottom-right"
          defaultOpen={false}
          namespace="c15tStore"
          disabled={false}
        />
      )}
    </C15tConsentProvider>
  );
}