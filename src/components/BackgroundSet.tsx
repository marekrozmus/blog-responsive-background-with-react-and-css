import React from "react";
import './BackgroundSet.css';

export interface BackgroundSetProps {
  desktopImageSrc?: string;
  mobileImageSrc?: string;
  tabletImageSrc?: string;
  parentRef?: React.RefObject<HTMLElement>;
}

const decorateFileUrl = (fileUrl: string | undefined) => {
  if (!fileUrl) {
    return fileUrl;
  }

  return `url("${fileUrl}")`;
};

const BackgroundSet = (props: BackgroundSetProps) => {
  const {
    desktopImageSrc,
    mobileImageSrc,
    parentRef,
    tabletImageSrc,
  } = props;

  const mobileFileUrl =
    decorateFileUrl(mobileImageSrc || tabletImageSrc || desktopImageSrc) ||
    null;

  const tabletFileUrl =
    decorateFileUrl(tabletImageSrc || mobileImageSrc || desktopImageSrc) ||
    null;

  const desktopFileUrl =
    decorateFileUrl(desktopImageSrc || tabletImageSrc || mobileImageSrc) ||
    null;

  React.useEffect(() => {
    if (parentRef && parentRef.current) {
      parentRef.current.style.setProperty("--bg-mobile", mobileFileUrl);
      parentRef.current.style.setProperty("--bg-tablet", tabletFileUrl);
      parentRef.current.style.setProperty("--bg-desktop", desktopFileUrl);

      parentRef.current.classList.add("bg-background-set");
    }
  }, [
    desktopFileUrl,
    mobileFileUrl,
    parentRef,
    tabletFileUrl,
  ]);

  return null;
};

export default BackgroundSet;
