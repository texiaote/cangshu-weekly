import React from 'react';
import Sidebar from '@theme-original/DocRoot/Layout/Sidebar';
import type SidebarType from '@theme/DocRoot/Layout/Sidebar';
import type {WrapperProps} from '@docusaurus/types';

type Props = WrapperProps<typeof SidebarType>;

export default function SidebarWrapper(props: Props): JSX.Element {
  return (
    <>
      <Sidebar {...props} />
    </>
  );
}
