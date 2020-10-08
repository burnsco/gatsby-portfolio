import { css, keyframes } from "@emotion/core"
import styled from "@emotion/styled"

const dash = keyframes`
  0% {
    stroke-dashoffset: 1000;
  }
  100% {
    stroke-dashoffset: 0;
  }
`
const move = keyframes`
  100% {
    transform: translate3d(0, 0, 1px) rotate(360deg);
  }
`

const zoom = keyframes`
  50% {
    transform:scale(1.2) skew(2deg, 2deg);
  }
`

const wave = keyframes`
  0% {
    d: path("M 0 100 Q 250 50 400 200 Q 550 350 800 300 L 800 0 L 0 0 L 0 100 Z");
  }
  50% {
    d: path("M 0 100 Q 200 150 400 200 Q 600 250 800 300 L 800 0 L 0 0 L 0 100 Z");
  }
  100% {
    d: path("M 0 100 Q 150 350 400 200 Q 650 50 800 300 L 800 0 L 0 0 L 0 100 Z");
  }
`
export const WaveWrapper = styled.div`
  position: absolute;
  left: 0;
  height: 100%;
  width: 100%;
  user-select: none;
  pointer-events: none;
  ${({ bottom }: any) =>
    bottom &&
    css`
      transform: matrix(1, 0, 0, -1, 0, 0);
    `}
`
export const waveAnimation = (length: any) => css`
  animation: ${wave} ${length} linear infinite alternate;
`

export const dashAnimation = (length: any) => css`
  animation: ${dash} ${length} linear forwards;
`

export const zoomAnimation = (length: any) => css`
  animation: ${zoom} ${length} linear infinite;
`

export const moveAnimation = (length: any) => css`
  animation: ${move} ${length} linear infinite;
`

export const InnerWave = styled.div`
  width: 100%;
  height: 20vh;
  left: 0;
  position: absolute;
  svg {
    width: 100%;
    height: 20vh;
  }
  path {
    ${waveAnimation("20s")};
  }
  ${({ layer, waveoffset }: any) => ({
    zIndex: layer && layer,
    top: waveoffset && waveoffset
  })}
`

export const SplashImageObj = {
  position: "absolute",
  top: "unset",
  bottom: 0,
  right: 0,
  width: "100%",
  height: "85vh",
  objectFit: "contain",
  objectPosition: "bottom",
  userSelect: "none",
  transition: "transform .5s, filter 1.5s ease-in-out",
  filter: "grayscale(100%)",
  "&:hover": {
    filter: "grayscale(0)",
    transform: "scale(1.1)"
  }
}

export const HyperLink = styled.a`
  cursor: pointer;
  font-weight: 500;
  text-decoration: none;
  color: #2d3748;
`
