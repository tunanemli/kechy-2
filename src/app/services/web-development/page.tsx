import { ServiceDetail, serviceMetadata } from "@/components/services/ServiceDetail";

export const metadata = serviceMetadata("web-technology");

export default function WebDevelopmentPage() {
  return <ServiceDetail id="web-technology" />;
}
