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
        ...(pe ? { paddingRight: pe } : {}),
      }}
      styles={{
        body: {
            padding: 0
        }
      }}
      cover={
        <Image
          src={photo}
          alt={title || "Photo"}
          style={{
            height: "14rem", // ~ h-56
            width: "100%",
            objectFit: "cover",
            borderRadius: "0.5rem", // ~ rounded-lg
            transition: "filter 0.3s ease",
            filter: isHovered ? "grayscale(50%)" : "none",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)", // shadow-xl
          }}
        />
      }
    >
      {title && <Title level={5} style={{ marginBottom: 0, padding: "1rem" }}>
        {title}
      </Title>}
      {text && <Paragraph
        style={{
          fontSize: "0.875rem",
          lineHeight: 1.625,
          color: "#6b7280", // Tailwind's gray-500
          padding: "0 1rem"
        }}
      >
        {text}
      </Paragraph>}
    </Card>
  );
}
