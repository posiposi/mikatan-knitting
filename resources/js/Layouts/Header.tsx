import React from 'react';
import { Box, Flex, Text, Link, Icon, Badge } from '@chakra-ui/react';
import { FiShoppingCart } from 'react-icons/fi';
import { FaUser } from 'react-icons/fa';
import type { TopBanner } from '@/types/topBanner';

const TopBanner: React.FC<TopBanner> = ({ cartItemCount, auth }) => {
  return (
    <Box w="100%" bg="blue.600" color="white" px={4} py={2}>
      <Flex align="center" justify="space-between">
        <Link href="/" _hover={{ textDecoration: 'none' }}>
          <Text fontSize="xl" fontWeight="bold">
            みかたんにってぃんぐ
          </Text>
        </Link>
        <Flex>
          {auth.user ? (
            <Link
              href={route('dashboard')}
              className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400"
              p={2}
              _hover={{ textDecoration: 'none' }}
            >
              <Icon as={FaUser} w={6} h={6} />
            </Link>
          ) : (
            <>
              <Link
                href={route('login')}
                className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400"
                p={2}
                _hover={{ textDecoration: 'none' }}
              >
                ログイン
              </Link>

              <Link
                href={route('register')}
                className="ms-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400"
                p={2}
                _hover={{ textDecoration: 'none' }}
              >
                会員登録
              </Link>
            </>
          )}
          <Link
            href="/cart"
            position="relative"
            p={2}
            _hover={{ textDecoration: 'none' }}
          >
            <Icon as={FiShoppingCart} w={6} h={6} />
            {cartItemCount > 0 && (
              <Badge
                colorScheme="red"
                ml="-1"
                mt="-1"
                position="absolute"
                top="0"
                right="0"
              >
                {cartItemCount}
              </Badge>
            )}
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default TopBanner;
