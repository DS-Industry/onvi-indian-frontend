import { Card, Typography } from "antd";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";

const { Title, Paragraph } = Typography;

export default function PhotoCard({
  title,
  text,
  photo,
  pe,
}: {
  title?: string;
  text?: string;
  photo: string | StaticImageData;
  pe?: string;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      hoverable
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        padding: "0.5rem",
        paddingBottom: "4rem",
        ...(pe ? { paddingRight: pe } : {}),
        borderRadius: 12,
      }}
      cover={
        <Image
          src={photo}
          alt={title || "Photo"}
          style={{
            height: "14rem", // ~ h-56
            width: "100%",
            objectFit: "cover",
            borderRadius: 12,
            transition: "filter 0.3s ease",
            filter: isHovered ? "grayscale(50%)" : "none",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)", // shadow-xl
          }}
        />
      }
    >
      <Title level={5} style={{ marginBottom: 0 }}>
        {title}
      </Title>
      <Paragraph
        ellipsis={{ rows: 3 }}
        style={{
          marginTop: 8,
          fontSize: "0.875rem",
          lineHeight: 1.625,
          color: "#6b7280", // Tailwind's gray-500
        }}
      >
        {text}
      </Paragraph>
    </Card>
  );
}
