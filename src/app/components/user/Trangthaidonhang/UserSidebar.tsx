import * as React from "react";
import { UserProfile } from "./UserProfile";
import { SidebarMenuItem } from "./SidebarMenuItem";

export const UserSidebar: React.FC = () => {
  return (
    <aside className="flex flex-col w-full max-md:mt-5">
      <UserProfile />
      <nav className="mt-5 space-y-0">
        <SidebarMenuItem icon="https://cdn.builder.io/api/v1/image/assets/TEMP/7877ea301994320338404d04085fdd80dde00874?placeholderIfAbsent=true&apiKey=b41381b6d0d64666865a237301447803" label="Thông tin tài khoản" />
        <SidebarMenuItem icon="https://cdn.builder.io/api/v1/image/assets/TEMP/005341de869602c4565194252521dadf96fb20ce?placeholderIfAbsent=true&apiKey=b41381b6d0d64666865a237301447803" label="Thông báo của tôi" />
        <SidebarMenuItem icon="https://cdn.builder.io/api/v1/image/assets/TEMP/cfffaf6c26faa4e8205359af8e62ebddc62a09a5?placeholderIfAbsent=true&apiKey=b41381b6d0d64666865a237301447803" label="Quản lý đơn hàng" />
        <SidebarMenuItem icon="https://cdn.builder.io/api/v1/image/assets/TEMP/669d54a404eb75e4dac00c39b7c89cbb9c110a38?placeholderIfAbsent=true&apiKey=b41381b6d0d64666865a237301447803" label="Quản lý đổi trả" />
        <SidebarMenuItem icon="https://cdn.builder.io/api/v1/image/assets/TEMP/693c7d3890345cf10050f0ccda3cede3a50dd51f?placeholderIfAbsent=true&apiKey=b41381b6d0d64666865a237301447803" label="Sản phẩm yêu thích" />
        <SidebarMenuItem icon="https://cdn.builder.io/api/v1/image/assets/TEMP/3804c3653d092ba9e7ad7b51c0d03c90209ae4ea?placeholderIfAbsent=true&apiKey=b41381b6d0d64666865a237301447803" label="Địa chỉ của tôi" />
      </nav>
    </aside>
  );
};
