import React from "react";
import tw, { styled } from "twin.macro";

const Avatar = styled.div`
${({sm}) => sm && tw`w-12 h-12 relative m-4`}
${({md}) => md && tw`w-16 h-16 relative m-4`}
${({lg}) => lg && tw`w-24 h-24 relative m-4`}
  div {
    ${tw`w-full h-full rounded-full overflow-hidden shadow-inner text-center bg-purple-200 table cursor-pointer`}
  }
  span {
    ${tw`hidden group-hover:table-cell text-white font-bold align-middle`}
  }
  img {
    ${tw`object-cover object-center w-full h-full visible group-hover:hidden`}
  }
`;
export default ({ sm, md, lg, src, text }) => (
  <Avatar sm={sm} md={md} lg={lg}>
    <div>
      <img src={src} />
    </div>
    <span>{text}</span>
  </Avatar>
);
