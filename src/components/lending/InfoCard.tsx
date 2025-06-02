import { Typography, Space } from "antd";
import Image from "next/image";

const { Title, Paragraph } = Typography;

export default function InfoCard({
  img,
  title,
  text,
}: {
  img?: string;
  title: string;
  text: string;
}) {
  return (
    <Space align="start" size="middle">
      {img && (
        <Image
          src={img}
          alt={title}
          width={140}
          height={140}
          style={{ objectFit: "contain" }}
        />
      )}
      <div>
        <Title level={5} style={{ margin: 0 }}>
          {title}
        </Title>
        <Paragraph style={{ margin: "4px 0 0", color: "gray", fontSize: "0.875rem" }}>
          {text}
        </Paragraph>
      </div>
    </Space>
  );
}
