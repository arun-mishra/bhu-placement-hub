'use client';

import { Typography, Row, Col, Card } from 'antd';
import { TrophyOutlined, TeamOutlined, BankOutlined } from '@ant-design/icons';
import StatCard from '@/components/atoms/StatCard';

const { Title, Paragraph } = Typography;

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <Title level={1}>Welcome to University Placement Cell</Title>
        <Paragraph className="text-lg">
          Your gateway to exciting career opportunities and professional growth
        </Paragraph>
      </div>

      <Row gutter={[24, 24]} className="mb-12">
        <Col xs={24} md={8}>
          <StatCard
            title="Students Placed"
            value="500+"
            description="Successfully placed students"
            prefix={<TeamOutlined />}
          />
        </Col>
        <Col xs={24} md={8}>
          <StatCard
            title="Partner Companies"
            value="100+"
            description="Active corporate partners"
            prefix={<BankOutlined />}
          />
        </Col>
        <Col xs={24} md={8}>
          <StatCard
            title="Average Package"
            value="12 LPA"
            description="Average annual package"
            prefix={<TrophyOutlined />}
          />
        </Col>
      </Row>

      <Row gutter={[24, 24]}>
        <Col xs={24} md={8}>
          <Card title="Latest News" className="h-full">
            <ul className="list-disc pl-4">
              <li>Campus Drive by Tech Corp scheduled next week</li>
              <li>Resume Building Workshop on Friday</li>
              <li>Mock Interview Sessions for Final Year Students</li>
            </ul>
          </Card>
        </Col>
        <Col xs={24} md={8}>
          <Card title="Upcoming Events" className="h-full">
            <ul className="list-disc pl-4">
              <li>Career Fair 2024 - March 15</li>
              <li>Industry Expert Talk - March 20</li>
              <li>Technical Interview Preparation - March 25</li>
            </ul>
          </Card>
        </Col>
        <Col xs={24} md={8}>
          <Card title="Success Stories" className="h-full">
            <ul className="list-disc pl-4">
              <li>John Doe placed at Google with 45 LPA</li>
              <li>Jane Smith joins Microsoft as SDE</li>
              <li>Team of 5 students selected by Amazon</li>
            </ul>
          </Card>
        </Col>
      </Row>
    </div>
  );
}