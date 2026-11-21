import {
  SearchDialog,
  SearchDialogClose,
  SearchDialogContent,
  SearchDialogHeader,
  SearchDialogIcon,
  SearchDialogInput,
  SearchDialogList,
  SearchDialogOverlay,
  type SharedProps,
} from 'fumadocs-ui/components/dialog/search';
import { useStaticSearch } from 'fumadocs-core/search/client';
import { create } from '@orama/orama';
import { useI18n } from 'fumadocs-ui/contexts/i18n';
import { localeMap } from '@/lib/i18n';

type InitOrama = NonNullable<
  NonNullable<Parameters<typeof useStaticSearch>[0]>['initOrama']
>;

const initOrama: InitOrama = (locale) => {
  const config = locale ? localeMap[locale] : undefined;

  return create({
    schema: { _: 'string' },
    language: config?._language,
    components: config?.components,
  }) as unknown as ReturnType<InitOrama>;
};

export default function DefaultSearchDialog(props: SharedProps) {
  const { locale } = useI18n();
  const search = useStaticSearch({
    from: '/wiki/api/search',
    initOrama,
    locale,
  });

  return (
    <SearchDialog {...search} {...props}>
      <SearchDialogOverlay />
      <SearchDialogContent>
        <SearchDialogHeader>
          <SearchDialogIcon />
          <SearchDialogInput />
          <SearchDialogClose />
        </SearchDialogHeader>
        <SearchDialogList />
      </SearchDialogContent>
    </SearchDialog>
  );
}
