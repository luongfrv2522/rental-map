import {Button, Flex, For} from "@chakra-ui/react";

const navMenu = [
  {
    name: "Trang chủ",
    url: "/home"
  },
  {
    name: "Phòng trọ",
    url: "/phong-tro"
  },
  {
    name: "Nhà nguyên căn",
    url: "/nha-nguyen-can"
  },
  {
    name: "Căn hộ chung cư",
    url: "/can-ho-chung-cu"
  },
  {
    name: "Khách sạn/Nhà nghỉ",
    url: "/khach-san-nha-nghi"
  }
];
export default function Nav(){
  return(
    <nav>
      <Flex justify="space-between" align="center" p={8}>
        <Flex gap={0}>
          <For each={navMenu}>
            {({name, url}) => <Button variant="ghost" asChild key={name}><a href={url}>{name}</a></Button>}
          </For>
        </Flex>
        <Flex gap={4}>
          <Button variant="solid" colorScheme="green">Đăng tin</Button>
        </Flex>
      </Flex>
    </nav>
  )
}