import React, { useState } from "react";
import {
  Flex,
  Icon,
  Image,
  Skeleton,
  Spinner,
  Stack,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { NextRouter } from "next/router";
import { AiOutlineDelete } from "react-icons/ai";
import { BsChat, BsDot } from "react-icons/bs";
import { FaReddit } from "react-icons/fa";
import {
  IoArrowDownCircleOutline,
  IoArrowDownCircleSharp,
  IoArrowRedoOutline,
  IoArrowUpCircleOutline,
  IoArrowUpCircleSharp,
  IoBookmarkOutline,
} from "react-icons/io5";
import { Post } from "../../atoms/postsAtom";
import Link from "next/link";
import moment from "moment";
import { BluixLogo } from "../../components/Icons/BluixLogo";

type PostItemProps = {
  post: Post;
  userIsCreator: boolean;
  userVoteValue?: number;
  onVote: (
    event: React.MouseEvent<SVGElement, MouseEvent>,
    post: Post,
    vote: number,
    communityId: string
  ) => void;
  onDeletePost: (post: Post) => Promise<boolean>;
  onSelectPost?: (post: Post) => void;
  router?: NextRouter;
  homePage?: boolean;
};


const PostItem: React.FC<PostItemProps> = ({
  post,
  userIsCreator,
  userVoteValue,
  onVote,
  onDeletePost,
  onSelectPost,
  router,
  homePage,
}) => {
  const [loadingImage, setLoadingImage] = useState(true);
  const [loadingDelete, setLoadingDelete] = useState(false);
  const singlePostPage = !onSelectPost;
  const { colorMode } = useColorMode();

  const handleDelete = async (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.stopPropagation();
    setLoadingDelete(true);
    try {
      const success = await onDeletePost(post);
      if (!success) throw new Error("Failed to delete post");

      if (singlePostPage) {
        router?.push(`/c/${post.communityId}`);
      }
    } catch (error: any) {
      console.log("Error deleting post", error.message);
      
      /**
       * Don't need to setLoading false if no error
       * as item will be removed from DOM
       */
      
      setLoadingDelete(false);
      
    }
  };    return (
    <Flex
      border="1px solid"
      borderColor={colorMode === "dark" ? "#144272" : "light.400"}
      bg={colorMode === "dark" ? "#051937" : "white"}
      borderRadius={singlePostPage ? "lg lg 0px 0px" : "lg"}
      cursor={singlePostPage ? "unset" : "pointer"}
      boxShadow={colorMode === "dark" ? "0 4px 12px rgba(10, 38, 71, 0.5)" : "sm"}
      _hover={{ 
        boxShadow: singlePostPage ? "0 4px 12px rgba(10, 38, 71, 0.5)" : "0 8px 24px rgba(10, 38, 71, 0.6)", 
        transform: singlePostPage ? "none" : "translateY(-3px)",
        transition: "all 0.3s ease"
      }}
      onClick={() => onSelectPost && post && onSelectPost(post)}
      transition="all 0.3s ease"
      overflow="hidden"
      backdropFilter="blur(8px)"
    >
      <Flex
        direction="column"
        align="center"
        bg={colorMode === "dark" ? "#0C2D5B" : "#ECF2FF"}
        p={2}
        width="40px"
        borderRadius={singlePostPage ? "0" : "lg 0px 0px lg"}
      >        <Icon
          as={
            userVoteValue === 1 ? IoArrowUpCircleSharp : IoArrowUpCircleOutline
          }
          color={userVoteValue === 1 ? "#5DA3FA" : colorMode === "dark" ? "#2C74B3" : "gray.400"}
          fontSize={22}
          cursor="pointer"
          onClick={(event: any) => onVote(event, post, 1, post.communityId)}
          transition="all 0.3s ease"
          _hover={{ 
            transform: "scale(1.3)", 
            filter: "drop-shadow(0 0 4px #5DA3FA)", 
            color: "#5DA3FA"
          }}
          sx={{
            filter: userVoteValue === 1 ? "drop-shadow(0 0 4px #5DA3FA)" : "none",
          }}
        />
        <Text 
          fontSize="10pt" 
          fontWeight={800} 
          my={1} 
          color={colorMode === "dark" ? "#5DA3FA" : "#2C74B3"}
        >
          {post.voteStatus}
        </Text>
        <Icon
          as={
            userVoteValue === -1
              ? IoArrowDownCircleSharp
              : IoArrowDownCircleOutline
          }
          color={userVoteValue === -1 ? "#D27AFF" : colorMode === "dark" ? "#2C74B3" : "gray.400"}
          fontSize={22}
          cursor="pointer"
          transition="all 0.3s ease"
          _hover={{ 
            transform: "scale(1.3)", 
            filter: "drop-shadow(0 0 4px #D27AFF)",
            color: "#D27AFF"
          }}
          sx={{
            filter: userVoteValue === -1 ? "drop-shadow(0 0 4px #D27AFF)" : "none",
          }}
          onClick={(event: any) => onVote(event, post, -1, post.communityId)}
        />
      </Flex>
      <Flex direction="column" width="100%">
        <Stack spacing={1} p="10px 10px">
          {post.createdAt && (
            <Stack direction="row" spacing={0.6} align="center" fontSize="9pt">
              {homePage && (
                <>
                  {post.communityImageURL ? (
                    <Image
                      borderRadius="full"
                      boxSize="18px"
                      src={post.communityImageURL}
                      mr={2}
                    />
                  ) : (
                    <BluixLogo boxSize={4} mr={1} showText={false} />
                  )}
                  <Link href={`/c/${post.communityId}`}>
                    <Text
                      fontWeight={700}
                      _hover={{ textDecoration: "underline" }}
                      onClick={(event) => event.stopPropagation()}
                    >{`c/${post.communityId}`}</Text>
                  </Link>
                  <Icon as={BsDot} color="gray.500" fontSize={8} />
                </>
              )}
              <Text color={colorMode === "dark" ? "dark.200" : "gray.500"}>
                Posted by u/{post.creatorDisplayName}{" "}
                {moment(new Date(post.createdAt.seconds * 1000)).fromNow()}
              </Text>
            </Stack>
          )}
          <Text fontSize="12pt" fontWeight={600}>
            {post.title}
          </Text>
          <Text fontSize="10pt">{post.body}</Text>
          {post.imageURL && (
            <Flex justify="center" align="center" p={2}>
              {loadingImage && (
                <Skeleton height="200px" width="100%" borderRadius={4} />
              )}
              <Image
                width="100%"
                maxWidth="500px"
                maxHeight="460px"
                src={post.imageURL}
                display={loadingImage ? "none" : "unset"}
                onLoad={() => setLoadingImage(false)}
                alt="Post Image"
              />
            </Flex>
          )}
        </Stack>
        <Flex ml={1} mb={0.5} color="gray.500" fontWeight={600}>
          <Flex
            align="center"
            p="8px 10px"
            borderRadius={4}
            _hover={{ bg: colorMode === "dark" ? "dark.400" : "gray.200" }}
            cursor="pointer"
          >
            <Icon as={BsChat} mr={2} />
            <Text fontSize="9pt">{post.numberOfComments}</Text>
          </Flex>
          <Flex
            align="center"
            p="8px 10px"
            borderRadius={4}
            _hover={{ bg: colorMode === "dark" ? "dark.400" : "gray.200" }}
            cursor="pointer"
          >
            <Icon as={IoArrowRedoOutline} mr={2} />
            <Text fontSize="9pt">Share</Text>
          </Flex>
          <Flex
            align="center"
            p="8px 10px"
            borderRadius={4}
            _hover={{ bg: colorMode === "dark" ? "dark.400" : "gray.200" }}
            cursor="pointer"
          >
            <Icon as={IoBookmarkOutline} mr={2} />
            <Text fontSize="9pt">Save</Text>
          </Flex>
          {userIsCreator && (
            <Flex
              align="center"
              p="8px 10px"
              borderRadius={4}
              _hover={{ bg: colorMode === "dark" ? "dark.400" : "gray.200" }}
              cursor="pointer"
              onClick={handleDelete}
            >
              {loadingDelete ? (
                <Spinner size="sm" />
              ) : (
                <>
                  <Icon as={AiOutlineDelete} mr={2} />
                  <Text fontSize="9pt">Delete</Text>
                </>
              )}
            </Flex>
          )}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default PostItem; 

