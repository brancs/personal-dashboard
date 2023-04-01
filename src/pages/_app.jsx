import "@/styles/globals.css";
import "@/styles/responsive.css";
import MainLayout from "@/layouts/MainLayout";

export default function App({ Component, pageProps }) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}
