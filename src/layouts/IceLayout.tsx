import ProLayout from "@ant-design/pro-layout";
import { asideMenuConfig } from "./menuConfig";
// import store from "@/store";
import logo from "@/assets/logo.svg";
// import Footer from "@/components/Footer";
// import styles from "./layout.module.css";
import { Link, Outlet } from "react-router-dom";
import Footer from "./comments/Footer";
import AvatarDropdown from "./comments/AvatarDropdown";
export default function IceLayout() {
  if (["/login"].includes(location.pathname)) {
    return <Outlet />;
  }

  return (
    <ProLayout
      menu={{ defaultOpenAll: true }}
      logo={<img src='/vite.svg' alt="logo" />}
      title="AI训练平台"
      location={{
        pathname: location.pathname,
      }}
      layout="mix"
    //   className={styles.layout}
      rightContentRender={() => (
        <AvatarDropdown
          avatar="/vite.svg"
          name="小熊"
        />
      )}
      menuDataRender={() => asideMenuConfig}
      menuItemRender={(item, defaultDom) => {
        if (!item.path) {
          return defaultDom;
        }
        return <Link to={item.path}>{defaultDom}</Link>;
      }}
      footerRender={() => <Footer />}
    >
      <Outlet />
    </ProLayout>
  );
}
