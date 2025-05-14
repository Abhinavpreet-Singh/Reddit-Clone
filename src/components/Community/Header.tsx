import React from "react";
import { Box, Button, Flex, Icon, Text, Image, useColorMode } from "@chakra-ui/react";
import { Community, communityState } from "../../atoms/communitiesAtom";
import useCommunityData from "../../hooks/useCommunityData";
import { useSetRecoilState } from "recoil";
import { BluixLogoColored } from "../../components/Icons/BluixLogoColored";

type HeaderProps = {
  communityData: Community;
};

const Header: React.FC<HeaderProps> = ({ communityData }) => {

  const { communityStateValue, loading, error, onJoinLeaveCommunity } =
    useCommunityData(!!communityData);
  const isJoined = !!communityStateValue.mySnippets.find(
    (item) => item.communityId === communityData.id
  );
  const { colorMode } = useColorMode();

  return (    <Flex direction="column" width="100%" height="160px">
      <Box height="50%" bg={colorMode === "dark" ? "dark.400" : "brand.500"} />
      <Flex justifyContent="center" bg={colorMode === "dark" ? "dark.card" : "white"} height="50%"
        boxShadow={colorMode === "dark" ? "none" : "sm"}>
        <Flex width="95%" maxWidth="1100px">
          {/* IMAGE URL IS ADDED AT THE VERY END BEFORE DUMMY DATA-USE ICON AT FIRST */}
          {communityStateValue.currentCommunity.imageURL ? (
            <Image
              borderRadius="full"
              boxSize="76px"
              src={communityStateValue.currentCommunity.imageURL}
              alt="Community Image"
              position="relative"
              top={-4}
              boxShadow="lg"
              border={`4px solid ${colorMode === "dark" ? "#252D3C" : "white"}`}
            />
          ) : (
            <BluixLogoColored
              boxSize="76px"
              position="relative"
              top={-4}
              border={`4px solid ${colorMode === "dark" ? "#252D3C" : "white"}`}
              borderRadius="full" 
              bg={colorMode === "dark" ? "dark.500" : "white"}
              showText={false}
              p={2}
            />
          )}
          <Flex padding="10px 16px">
            <Flex direction="column" mr={6}>
              <Text fontWeight={800} fontSize="16pt">
                {communityData.id}
              </Text>
              <Text fontWeight={600} fontSize="10pt" color="gray.400">
                c/{communityData.id}
              </Text>
            </Flex>
            <Flex>
              <Button
                variant={isJoined ? "outline" : "solid"}
                height="30px"
                pr={6}
                pl={6}
                onClick={() => onJoinLeaveCommunity(communityData, isJoined)}
                isLoading={loading}
              >
                {isJoined ? "Joined" : "Join"}
              </Button>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
export default Header;
