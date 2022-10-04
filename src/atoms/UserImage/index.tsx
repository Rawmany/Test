import { FC } from "react";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

import { isDefined } from "@utils";

type Props = {
  image?: string;
};

const UserImage: FC<Props> = ({ image }) => {
  if (isDefined(image)) {
    return <Avatar src={"/static/images" + image} />;
  }

  return <Avatar icon={<UserOutlined />} />;
};

export default UserImage;
