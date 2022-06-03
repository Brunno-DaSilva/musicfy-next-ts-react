import NextImage from "next/image";
import {
  List,
  Box,
  ListIcon,
  ListItem,
  Center,
  Divider,
  LinkOverlay,
} from "@chakra-ui/layout";

import {
  MdHome,
  MdSearch,
  MdLibraryMusic,
  MdPlaylistAdd,
  MdFavorite,
} from "react-icons/md";

const Sidebar = () => {
  return (
    <Box
      width="100%"
      height="calc(100vh - 100px)"
      bg="#3d00e0"
      paddingX="5px"
      color="gray"
    >
      <Box paddingY="20px">
        <Box width="120px" marginBottom="20px" paddingY="20px">
          <NextImage src="/b-logo-png-white.png" width={50} height={100} />
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
