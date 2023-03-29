import * as React from 'react';
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import styled from "styled-components";

import Barchart from './Barchart';

const style = {
  position: 'absolute',
  top: '-6%',
  left: '5%',
  transform: 'translate(-50%, -50%)',
  width: 300,
//   bgcolor: 'background.paper',
//   border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
const Infobar = styled.div`
display: flex;
justify-content: flex-start;
flex-direction: column;
align-items: flex-start;
gap: 37px;
box-shadow: 0px 100px 80px rgba(108, 73, 172, 0.07),
  0px 42px 33px rgba(108, 73, 172, 0.05),
  0px 22px 18px rgba(108, 73, 172, 0.04),
  0px 13px 10px rgba(108, 73, 172, 0.04),
  0px 7px 5px rgba(108, 73, 172, 0.03), 0px 3px 2px rgba(108, 73, 172, 0.02);
border-radius: 20px;
background-color: white;
box-sizing: border-box;
padding: 20px 30px;
position: absolute;
left: 442px;
top: 184px;
width: 1071px;
height: 528px;
`;

const Header = styled.div`
display: flex;
justify-content: flex-start;
flex-direction: row;
align-items: flex-start;
flex: none;
gap: 24px;
box-sizing: border-box;
`;

const Title_0011 = styled.span`
color: rgb(23, 23, 37);
text-overflow: ellipsis;
font-size: 18px;
font-family: Poppins, sans-serif;
font-weight: 600;
text-align: left;
width: 457px;
`;

const Legend = styled.div`
display: flex;
justify-content: flex-start;
flex-direction: row;
align-items: center;
flex: none;
gap: 4px;
box-sizing: border-box;
`;

const Shape = styled.div`
width: 12px;
height: 12px;
background-color: rgb(164, 108, 233);
border-radius: 7px;
`;

const MarketingSales = styled.span`
color: rgb(68, 68, 79);
text-overflow: ellipsis;
font-size: 16px;
font-family: Roboto, sans-serif;
font-weight: 400;
line-height: 28px;
text-align: left;
width: 100px;
`;

const Shape_0001 = styled.div`
width: 12px;
height: 12px;
background-color: rgb(250, 230, 52);
border-radius: 7px;
`;

const Shape_0002 = styled.div`
width: 12px;
height: 12px;
background-color: rgb(252, 113, 125);
border-radius: 7px;
`;

const Shape_0003 = styled.div`
width: 12px;
height: 12px;
background-color: rgb(105, 93, 251);
border-radius: 7px;
`;

const Graph_0001 = styled.div`
width: 1011px;
height: 423px;
position: relative;
`;

const Chart_0004 = styled.div`
width: 1011px;
height: 423px;
position: absolute;
left: 0px;
top: 0px;
`;

const YAxis = styled.div`
width: 31px;
height: 379px;
position: absolute;
left: 0px;
top: 0px;
`;

const _1K = styled.span`
color: rgb(56, 56, 116);
text-overflow: ellipsis;
font-size: 16px;
font-family: Poppins, sans-serif;
font-weight: 300;
line-height: 24px;
text-align: left;
position: absolute;
left: 9px;
top: calc((calc((50% + -178px)) - 12px));
right: 9px;
opacity: 0.6;
`;

const _0 = styled.span`
color: rgb(56, 56, 116);
text-overflow: ellipsis;
font-size: 16px;
font-family: Poppins, sans-serif;
font-weight: 300;
line-height: 24px;
text-align: left;
position: absolute;
left: 18px;
top: calc((calc((50% + 178px)) - 12px));
right: 3px;
opacity: 0.6;
`;

const _200 = styled.span`
color: rgb(56, 56, 116);
text-overflow: ellipsis;
font-size: 16px;
font-family: Poppins, sans-serif;
font-weight: 300;
line-height: 24px;
text-align: left;
position: absolute;
left: 0px;
top: calc((calc((50% + 107px)) - 12px));
right: 1px;
opacity: 0.6;
`;

const _400 = styled.span`
color: rgb(56, 56, 116);
text-overflow: ellipsis;
font-size: 16px;
font-family: Poppins, sans-serif;
font-weight: 300;
line-height: 24px;
text-align: left;
position: absolute;
left: 0px;
top: calc((calc((50% + 36px)) - 12px));
right: 0px;
opacity: 0.6;
`;

const _600 = styled.span`
color: rgb(56, 56, 116);
text-overflow: ellipsis;
font-size: 16px;
font-family: Poppins, sans-serif;
font-weight: 300;
line-height: 24px;
text-align: left;
position: absolute;
left: 0px;
top: calc((calc((50% + -36px)) - 12px));
right: 0px;
opacity: 0.6;
`;

const _800 = styled.span`
color: rgb(56, 56, 116);
text-overflow: ellipsis;
font-size: 16px;
font-family: Poppins, sans-serif;
font-weight: 300;
line-height: 24px;
text-align: left;
position: absolute;
left: 0px;
top: calc((calc((50% + -107px)) - 12px));
right: 0px;
opacity: 0.6;
`;

const XAxis = styled.div`
width: 961px;
height: 423px;
position: absolute;
left: 50px;
top: 0px;
`;

const Dec = styled.div`
overflow: hidden;
position: absolute;
left: 931px;
top: 0px;
right: -0px;
bottom: 0px;
`;

const Name_0001 = styled.span`
color: rgb(56, 56, 116);
text-overflow: ellipsis;
font-size: 16px;
font-family: Poppins, sans-serif;
font-weight: 300;
line-height: 24px;
text-align: center;
position: absolute;
left: -1px;
top: calc((calc((50% + 197px)) - 12px));
right: -1px;
opacity: 0.6;
`;

const Shape_0004 = styled.svg`
width: 1px;
height: 384px;
position: absolute;
left: 14px;
top: -0px;
right: 15px;
bottom: 39px;
`;

const Nov = styled.div`
overflow: hidden;
position: absolute;
left: 845px;
top: 0px;
right: 86px;
bottom: 0px;
`;

const Name_0002 = styled.span`
color: rgb(56, 56, 116);
text-overflow: ellipsis;
font-size: 16px;
font-family: Poppins, sans-serif;
font-weight: 300;
line-height: 24px;
text-align: center;
position: absolute;
left: 0px;
top: calc((calc((50% + 197px)) - 12px));
right: -1px;
opacity: 0.6;
`;

const Oct = styled.div`
overflow: hidden;
position: absolute;
left: 763px;
top: 0px;
right: 172px;
bottom: 0px;
`;

const Name_0003 = styled.span`
color: rgb(56, 56, 116);
text-overflow: ellipsis;
font-size: 16px;
font-family: Poppins, sans-serif;
font-weight: 300;
line-height: 24px;
text-align: center;
position: absolute;
left: -2px;
top: calc((calc((50% + 197px)) - 12px));
right: -1px;
opacity: 0.6;
`;

const Shape_0006 = styled.svg`
width: 1px;
height: 384px;
position: absolute;
left: 11px;
top: -0px;
right: 14px;
bottom: 39px;
`;

const Sep = styled.div`
overflow: hidden;
position: absolute;
left: 678px;
top: 0px;
right: 254px;
bottom: 0px;
`;

const Shape_0007 = styled.svg`
width: 1px;
height: 384px;
position: absolute;
left: 13px;
top: -0px;
right: 15px;
bottom: 39px;
`;

const Aug = styled.div`
overflow: hidden;
position: absolute;
left: 592px;
top: 0px;
right: 339px;
bottom: 0px;
`;

const Name_0005 = styled.span`
color: rgb(56, 56, 116);
text-overflow: ellipsis;
font-size: 16px;
font-family: Poppins, sans-serif;
font-weight: 300;
line-height: 24px;
text-align: center;
position: absolute;
left: -1px;
top: calc((calc((50% + 197px)) - 12px));
right: -2px;
opacity: 0.6;
`;

const Jul = styled.div`
overflow: hidden;
position: absolute;
left: 512px;
top: 0px;
right: 425px;
bottom: 0px;
`;

const Name_0006 = styled.span`
color: rgb(56, 56, 116);
text-overflow: ellipsis;
font-size: 16px;
font-family: Poppins, sans-serif;
font-weight: 300;
line-height: 24px;
text-align: center;
position: absolute;
left: 1px;
top: calc((calc((50% + 197px)) - 12px));
right: 0px;
opacity: 0.6;
`;

const Shape_0009 = styled.svg`
width: 1px;
height: 384px;
position: absolute;
left: 10px;
top: -0px;
right: 13px;
bottom: 39px;
`;

const Jun = styled.div`
overflow: hidden;
position: absolute;
left: 427px;
top: 0px;
right: 505px;
bottom: 0px;
`;

const Name_0007 = styled.span`
color: rgb(56, 56, 116);
text-overflow: ellipsis;
font-size: 16px;
font-family: Poppins, sans-serif;
font-weight: 300;
line-height: 24px;
text-align: center;
position: absolute;
left: -1px;
top: calc((calc((50% + 197px)) - 12px));
right: -0px;
opacity: 0.6;
`;

const Shape_0010 = styled.svg`
width: 1px;
height: 384px;
position: absolute;
left: 15px;
top: -0px;
right: 13px;
bottom: 39px;
`;

const May = styled.div`
overflow: hidden;
position: absolute;
left: 339px;
top: 0px;
right: 590px;
bottom: 0px;
`;

const Shape_0011 = styled.svg`
width: 1px;
height: 384px;
position: absolute;
left: 17px;
top: -0px;
right: 14px;
bottom: 39px;
`;

const Apr = styled.div`
overflow: hidden;
position: absolute;
left: 255px;
top: 0px;
right: 678px;
bottom: 0px;
`;

const Name_0009 = styled.span`
color: rgb(56, 56, 116);
text-overflow: ellipsis;
font-size: 16px;
font-family: Poppins, sans-serif;
font-weight: 300;
line-height: 24px;
text-align: center;
position: absolute;
left: -1px;
top: calc((calc((50% + 197px)) - 12px));
right: 1px;
opacity: 0.6;
`;

const Shape_0012 = styled.svg`
width: 1px;
height: 384px;
position: absolute;
left: 15px;
top: -0px;
right: 11px;
bottom: 39px;
`;

const Mar = styled.div`
overflow: hidden;
position: absolute;
left: 169px;
top: 0px;
right: 761px;
bottom: 0px;
`;

const Name_0010 = styled.span`
color: rgb(56, 56, 116);
text-overflow: ellipsis;
font-size: 16px;
font-family: Poppins, sans-serif;
font-weight: 300;
line-height: 24px;
text-align: center;
position: absolute;
left: -0px;
top: calc((calc((50% + 197px)) - 12px));
right: -1px;
opacity: 0.6;
`;

const Shape_0013 = styled.svg`
width: 1px;
height: 384px;
position: absolute;
left: 15px;
top: -0px;
right: 14px;
bottom: 39px;
`;

const Feb = styled.div`
overflow: hidden;
position: absolute;
left: 85px;
top: 0px;
right: 847px;
bottom: 0px;
`;

const Shape_0014 = styled.svg`
width: 1px;
height: 384px;
position: absolute;
left: 16px;
top: -0px;
right: 11px;
bottom: 39px;
`;

const Jan = styled.div`
overflow: hidden;
position: absolute;
left: 0px;
top: 0px;
right: 932px;
bottom: 0px;
`;

const Data = styled.div`
width: 893px;
height: 286px;
position: absolute;
left: 97px;
top: 24px;
`;

const Bubble = styled.div`
width: 16px;
height: 16px;
background-color: rgb(147, 82, 229);
border-radius: 16px / 16px;
position: absolute;
left: 827px;
top: 198px;
`;

const Bubble_0001 = styled.div`
width: 25px;
height: 25px;
background-color: rgb(147, 82, 229);
border-radius: 25px / 25px;
position: absolute;
left: 446px;
top: 250px;
`;

const Bubble_0002 = styled.div`
width: 16px;
height: 16px;
background-color: rgb(147, 82, 229);
border-radius: 16px / 16px;
position: absolute;
left: 599px;
top: 119px;
`;

const Bubble_0003 = styled.div`
width: 16px;
height: 16px;
background-color: rgb(147, 82, 229);
border-radius: 16px / 16px;
position: absolute;
left: 77px;
top: 161px;
`;

const Bubble_0004 = styled.div`
width: 77px;
height: 77px;
box-shadow: 0px 109px 80px rgba(226, 13, 148, 0.13),
  0px 46px 33px rgba(226, 13, 148, 0.09),
  0px 24px 18px rgba(226, 13, 148, 0.08),
  0px 14px 10px rgba(226, 13, 148, 0.06),
  0px 7px 5px rgba(226, 13, 148, 0.05), 0px 3px 2px rgba(226, 13, 148, 0.04);
background-color: rgb(255, 115, 125);
border-radius: 77px / 77px;
position: absolute;
left: 740px;
top: 185px;
`;

const Bubble_0005 = styled.div`
width: 94px;
height: 94px;
background-color: rgb(249, 224, 1);
border-radius: 94px / 94px;
position: absolute;
left: 215px;
top: 192px;
opacity: 0.8;
`;

const Bubble_0006 = styled.div`
width: 68px;
height: 68px;
box-shadow: 0px 109px 80px rgba(132, 13, 226, 0.14),
  0px 46px 33px rgba(132, 13, 226, 0.1),
  0px 24px 18px rgba(132, 13, 226, 0.08),
  0px 14px 10px rgba(132, 13, 226, 0.07),
  0px 7px 5px rgba(132, 13, 226, 0.06), 0px 3px 2px rgba(132, 13, 226, 0.04);
background-color: rgba(105, 93, 251, 0.8);
border-radius: 68px / 68px;
position: absolute;
left: 703px;
top: 94px;
`;

const Bubble_0007 = styled.div`
width: 25px;
height: 25px;
background-color: rgb(105, 93, 251);
border-radius: 25px / 25px;
position: absolute;
left: 561px;
top: 169px;
`;

const Bubble_0008 = styled.div`
width: 44px;
height: 44px;
background-color: rgb(147, 82, 229);
border-radius: 44px / 44px;
position: absolute;
left: 848px;
top: 219px;
`;

const Bubble_0009 = styled.div`
width: 44px;
height: 44px;
box-shadow: 0px 109px 80px rgba(132, 13, 226, 0.14),
  0px 46px 33px rgba(132, 13, 226, 0.1),
  0px 24px 18px rgba(132, 13, 226, 0.08),
  0px 14px 10px rgba(132, 13, 226, 0.07),
  0px 7px 5px rgba(132, 13, 226, 0.06), 0px 3px 2px rgba(132, 13, 226, 0.04);
background-color: rgba(147, 82, 229, 0.8);
border-radius: 44px / 44px;
position: absolute;
left: 0px;
top: 214px;
`;

const Bubble_0010 = styled.div`
width: 34px;
height: 34px;
background-color: rgb(250, 230, 52);
border-radius: 34px / 34px;
position: absolute;
left: 102px;
top: 92px;
`;

const Bubble_0011 = styled.div`
width: 147px;
height: 146px;
position: absolute;
left: 119px;
top: 109px;
`;

const Bubble_0012 = styled.div`
width: 147px;
height: 146px;
box-shadow: 0px 100px 80px rgba(255, 43, 43, 0.15),
  0px 46px 37px rgba(255, 43, 43, 0.11),
  0px 26px 21px rgba(255, 43, 43, 0.09),
  0px 16px 13px rgba(255, 43, 43, 0.08),
  0px 10px 8px rgba(255, 43, 43, 0.07), 0px 5px 4px rgba(255, 43, 43, 0.06),
  0px 2px 2px rgba(255, 43, 43, 0.04);
background-color: rgb(255, 80, 93);
border-radius: 147px / 146px;
position: absolute;
left: 0px;
top: 0px;
opacity: 0.8;
`;

const Value_0006 = styled.span`
color: white;
text-overflow: ellipsis;
font-size: 18px;
font-family: Poppins, sans-serif;
font-weight: 600;
text-align: center;
min-height: 28px;
position: absolute;
left: 40px;
top: calc((calc((50% + -0px)) - 14px));
right: 39px;
height: 28px;
`;

const Bubble_0013 = styled.div`
width: 130px;
height: 129px;
position: absolute;
left: 626px;
top: 133px;
`;

const Bubble_0014 = styled.div`
width: 130px;
height: 129px;
background-color: rgb(250, 230, 52);
border-radius: 130px / 129px;
position: absolute;
left: 0px;
top: 0px;
`;

const Value_0007 = styled.span`
color: white;
text-overflow: ellipsis;
font-size: 18px;
font-family: Poppins, sans-serif;
font-weight: 600;
text-align: center;
min-height: 28px;
position: absolute;
left: 31px;
top: calc((calc((50% + 0px)) - 14px));
right: 31px;
height: 28px;
`;

const Bubble_0015 = styled.div`
width: 248px;
height: 247px;
position: absolute;
left: 217px;
top: 0px;
`;

const Bubble_0016 = styled.div`
width: 248px;
height: 247px;
box-shadow: 0px 109px 80px rgba(132, 13, 226, 0.14),
  0px 46px 33px rgba(132, 13, 226, 0.1),
  0px 24px 18px rgba(132, 13, 226, 0.08),
  0px 14px 10px rgba(132, 13, 226, 0.07),
  0px 7px 5px rgba(132, 13, 226, 0.06), 0px 3px 2px rgba(132, 13, 226, 0.04);
background-color: rgb(105, 93, 251);
border-radius: 248px / 247px;
position: absolute;
left: 0px;
top: 0px;
`;

const Value_0008 = styled.span`
color: white;
text-overflow: ellipsis;
font-size: 18px;
font-family: Poppins, sans-serif;
font-weight: 600;
text-align: center;
min-height: 28px;
position: absolute;
left: 90px;
top: calc((calc((50% + -4px)) - 14px));
right: 91px;
height: 28px;
`;

const Text = styled.span`
color: white;
text-overflow: ellipsis;
font-size: 16px;
font-family: Roboto, sans-serif;
font-weight: 400;
text-align: center;
min-height: 18px;
position: absolute;
left: 98px;
top: calc((calc((50% + 18px)) - 9px));
right: 98px;
height: 18px;
`;

const Name_0013 = styled.span`
color: black;
text-overflow: ellipsis;
font-size: 21px;
font-family: Archivo, sans-serif;
font-weight: 400;
text-align: left;
width: 161px;
position: absolute;
left: 91px;
top: calc((calc((50% + -510px)) - 11px));
`;

const WstfLogo1 = styled.div`
width: 40px;
height: 40px;
overflow: hidden;
position: absolute;
left: 42px;
top: 10px;
`;

const Group = styled.div`
width: 39px;
height: 39px;
position: absolute;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
left: 0px;
top: 0px;
`;

const Vector = styled.img`
object-fit: cover;
position: absolute;
left: 0px;
top: 0px;
right: 0px;
bottom: 0px;
`;

export default function Info() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

 

 

  return (
    <div className='container_info'>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          <Infobar>
          <Header>
            <Title_0011>Sales Figures</Title_0011>
            <Legend>
              <Shape />
              <MarketingSales>Sales</MarketingSales>
            </Legend>
            <Legend>
              <Shape_0001 />
              <MarketingSales>Users</MarketingSales>
            </Legend>
            <Legend>
              <Shape_0002 />
              <MarketingSales>Product</MarketingSales>
            </Legend>
            <Legend>
              <Shape_0003 />
              <MarketingSales>Team</MarketingSales>
            </Legend>
          </Header>
          <Graph_0001>
            <Chart_0004>
              <YAxis>
                <_1K>1k</_1K>
                <_0>0</_0>
                <_200>200</_200>
                <_400>400</_400>
                <_600>600</_600>
                <_800>800</_800>
              </YAxis>
              <XAxis>
                <Dec>
                  <Name_0001>Dec</Name_0001>
                  <Shape_0004 xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill="rgb(241, 241, 245)"
                      d="M0 384.2L2.44063e-14 0L1.14496 0L1.14496 384.2L0 384.2Z"
                    />
                  </Shape_0004>
                </Dec>
                <Nov>
                  <Name_0002>Nov</Name_0002>
                  <Shape_0004 xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill="rgb(241, 241, 245)"
                      d="M0 384.2L2.44062e-14 0L1.14496 0L1.14496 384.2L0 384.2Z"
                    />
                  </Shape_0004>
                </Nov>
                <Oct>
                  <Name_0003>Oct</Name_0003>
                  <Shape_0006 xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill="rgb(241, 241, 245)"
                      d="M0 384.2L2.44063e-14 0L1.14496 0L1.14496 384.2L0 384.2Z"
                    />
                  </Shape_0006>
                </Oct>
                <Sep>
                  <Name_0001>Sep</Name_0001>
                  <Shape_0007 xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill="rgb(241, 241, 245)"
                      d="M0 384.2L2.44063e-14 0L1.14496 0L1.14496 384.2L0 384.2Z"
                    />
                  </Shape_0007>
                </Sep>
                <Aug>
                  <Name_0005>Aug</Name_0005>
                  <Shape_0004 xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill="rgb(241, 241, 245)"
                      d="M0 384.2L2.44063e-14 0L1.14496 0L1.14496 384.2L0 384.2Z"
                    />
                  </Shape_0004>
                </Aug>
                <Jul>
                  <Name_0006>Jul</Name_0006>
                  <Shape_0009 xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill="rgb(241, 241, 245)"
                      d="M0 384.2L2.44063e-14 0L1.14496 0L1.14496 384.2L0 384.2Z"
                    />
                  </Shape_0009>
                </Jul>
                <Jun>
                  <Name_0007>Jun</Name_0007>
                  <Shape_0010 xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill="rgb(241, 241, 245)"
                      d="M0 384.2L2.44063e-14 0L1.14496 0L1.14496 384.2L0 384.2Z"
                    />
                  </Shape_0010>
                </Jun>
                <May>
                  <Name_0001>May</Name_0001>
                  <Shape_0011 xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill="rgb(241, 241, 245)"
                      d="M0.013011 384.2L0.013011 0L1.13195 0L1.13195 384.2L0.013011 384.2Z"
                    />
                  </Shape_0011>
                </May>
                <Apr>
                  <Name_0009>Apr</Name_0009>
                  <Shape_0012 xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill="rgb(241, 241, 245)"
                      d="M0.0130109 384.2L0.0130109 0L1.13195 0L1.13195 384.2L0.0130109 384.2Z"
                    />
                  </Shape_0012>
                </Apr>
                <Mar>
                  <Name_0010>Mar</Name_0010>
                  <Shape_0013 xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill="rgb(241, 241, 245)"
                      d="M0.0130109 384.2L0.0130109 0L1.13195 0L1.13195 384.2L0.0130109 384.2Z"
                    />
                  </Shape_0013>
                </Mar>
                <Feb>
                  <Name_0007>Feb</Name_0007>
                  <Shape_0014 xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill="rgb(241, 241, 245)"
                      d="M0.0130109 384.2L0.0130109 0L1.13195 0L1.13195 384.2L0.0130109 384.2Z"
                    />
                  </Shape_0014>
                </Feb>
                <Jan>
                  <Name_0007>Jan</Name_0007>
                  <Shape_0010 xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill="rgb(241, 241, 245)"
                      d="M0.0130109 384.2L0.0130109 0L1.13195 0L1.13195 384.2L0.0130109 384.2Z"
                    />
                  </Shape_0010>
                </Jan>
              </XAxis>
            </Chart_0004>
            <Data>
              <Bubble />
              <Bubble_0001 />
              <Bubble_0002 />
              <Bubble_0003 />
              <Bubble_0004 />
              <Bubble_0005 />
              <Bubble_0006 />
              <Bubble_0007 />
              <Bubble_0008 />
              <Bubble_0009 />
              <Bubble_0010 />
              <Bubble_0011>
                <Bubble_0012 />
                <Value_0006>$27632</Value_0006>
              </Bubble_0011>
              <Bubble_0013>
                <Bubble_0014 />
                <Value_0007>$27632</Value_0007>
              </Bubble_0013>
              <Bubble_0015>
                <Bubble_0016 />
                <Value_0008>$27632</Value_0008>
                <Text>August</Text>
              </Bubble_0015>
            </Data>
          </Graph_0001>
        </Infobar>
     
      <Name_0013>WASSERSTOFF</Name_0013>
          </Typography>
         
        </Box>
      </Modal>
     <Barchart handleOpen={handleOpen}/>
    </div>
  );
}
