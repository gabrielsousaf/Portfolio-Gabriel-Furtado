import styled from "styled-components";

export const Section = styled.div`
  color: #fff;
`;

export const Container = styled.div`
  padding: 6rem 2rem 6rem;

  @media (max-width: 768px) {
    padding: 6rem 1rem;
  }
`;

export const Title = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  margin-top: 1rem;
  font-size: 3rem;

  @media (max-width: 468px) {
    font-size: 2.5rem;
  }
`;

export const Card = styled.article`
  margin: 2rem 0 0;
  background: #111a28;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-left: 4px solid #00cf5d;
  border-radius: 8px;
  padding: 1.5rem;
  width: 100%;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);
`;

export const Header = styled.header`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
`;

export const Role = styled.h3`
  font-size: 1.375rem;
  line-height: 1.2;
`;

export const Company = styled.p`
  margin-top: 0.125rem;
  color: #9fb0c3;
`;

export const Period = styled.span`
  font-size: 0.95rem;
  color: #00cf5d;
  background: rgba(0, 207, 93, 0.08);
  border: 1px solid rgba(0, 207, 93, 0.25);
  padding: 6px 10px;
  border-radius: 999px;
  white-space: nowrap;
`;

export const Bullets = styled.ul`
  margin-top: 1rem;
  display: grid;
  gap: 0.5rem;
`;

export const BulletItem = styled.li`
  line-height: 1.6;
  color: #e6eef7;
  list-style: none;
  position: relative;
  padding-left: 1.25rem;
  text-align: justify;
  text-justify: inter-word;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0.65rem;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #00cf5d;
    box-shadow: 0 0 0 3px rgba(0, 207, 93, 0.15);
  }

  & span {
    color: #00cf5d;
    font-weight: 600;
  }
`;

export const Tags = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
`;

export const Tag = styled.li`
  list-style: none;
  color: #9fb0c3;
  font-size: 0.85rem;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 999px;
  padding: 4px 10px;
`;
