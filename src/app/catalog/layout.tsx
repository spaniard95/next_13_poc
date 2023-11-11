import { CatalogDrawer } from "@/components/catalog-drawer";

export default function Page3Layout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return <div className="relative display-flex -mt-2">{children}</div>;
}
