import { Typography, Row, Col } from "antd";

const { Title, Paragraph } = Typography;

export default function Info({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <section style={{ backgroundColor: "#f9fafb", padding: "2rem" }}>
      <Row justify="center">
        <Col xs={24} sm={20} md={16} lg={12}>
          <div style={{ padding: "2rem 1rem", textAlign: "center" }}>
            <Title level={2} style={{ fontWeight: "bold", color: "#111827" }}>
              {title}
            </Title>
            <Paragraph
              style={{ color: "#6b7280", marginTop: "1rem" }}
              className="block"
            >
              {text}
            </Paragraph>
          </div>
        </Col>
      </Row>
    </section>
  );
}
