import styled from 'styled-components';

const Tag = styled.div`
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: rgba(0,0,0,0.65);
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5;
  list-style: none;
  -webkit-font-feature-settings: 'tnum';
  font-feature-settings: 'tnum';
  display: inline-block;
  height: 22px;
  margin-right: 8px;
  padding: 0 7px;
  font-size: 12px;
  line-height: 20px;
  white-space: nowrap;
  background: #fafafa;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  cursor: pointer;
  opacity: 1;
  -webkit-transition: all .3s cubic-bezier(.215, .61, .355, 1);
  transition: all .3s cubic-bezier(.215, .61, .355, 1);
`;

export default Tag;