'use client';

import React from 'react';
import { Result, Button, Typography } from 'antd';
import Image from 'next/image';


const { Title, Paragraph } = Typography;

const ActiveAccountPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#d3b298ca] to-[#d99816] p-4">
      {/* Logo hoặc biểu tượng */}
      <div className="relative w-[300px] h-[300px]">
        <Image
          src="/images/logo2.png"
          alt="WorkLocus Logo"
          fill
          style={{ objectFit: 'contain' }}
          priority
        />
      </div>

      {/* Thông báo thành công */}
      <Result
        icon={null}
        className="mt-[-60px]" // <--- Đã thêm class này để kéo Result lên sát logo hơn
        title={
          <Title
            level={2}
            style={{
              fontFamily: 'var(--font-baloo-2)',
              color: '#fff',
              fontWeight: 700,
              marginBottom: 0,
            }}
          >
            Kích hoạt tài khoản thành công!
          </Title>
        }
        subTitle={
          <Paragraph
            style={{
              fontFamily: 'var(--font-baloo-2)',
              color: '#fff',
              fontWeight: 400,
              fontSize: '1.1rem',
            }}
          >
            Chúc mừng bạn đã trở thành thành viên của WorkLocus! Hãy mở ứng dụng và đăng nhập để khám phá thế giới làm việc ngay nào!
          </Paragraph>
        }
        extra={[
          <Button
            key="app"
            size="large"
            style={{
              backgroundColor: '#fff',
              color: '#f28c38',
              fontFamily: 'var(--font-baloo-2)',
              fontWeight: 600,
              border: 'none',
              borderRadius: '12px',
              padding: '0 2rem',
              height: '48px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            }}
          >
            Hãy mở ứng dụng WorkLocus
          </Button>,
        ]}
      />

    </div>
  );
};

export default ActiveAccountPage;