import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import IndexCard from '@/Components/Items/IndexCard';
import { Grid, GridItem } from '@chakra-ui/react';
import Header from '@/Layouts/Header';
import { ItemsList } from '@/types/itemsList';
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
} from '@chakra-ui/react';

export default function Welcome({
  auth,
  itemsList,
}: PageProps<{
  laravelVersion: string;
  phpVersion: string;
  itemsList: ItemsList[];
}>) {
  return (
    <>
      <Head title="Welcome" />
      <div>
        <Header cartItemCount={2} auth={auth} />
      </div>
      {itemsList.length > 0 ? (
        <div className="relative sm:flex sm:justify-center sm:items-center min-h-screen">
          <div className="max-w-7xl mx-auto p-6 lg:p-8">
            <Grid templateColumns="repeat(2, 1fr)" gap={6} px={5} py={5}>
              {itemsList.map((item: ItemsList) => (
                <GridItem key={item.item_id}>
                  <IndexCard props={item} />
                </GridItem>
              ))}
            </Grid>
          </div>
        </div>
      ) : (
        <div
          className="top-0 left-0 w-full h-full flex items-center justify-center"
          style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
        >
          <Alert
            status="error"
            variant="subtle"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
            height="200px"
          >
            <AlertIcon boxSize="40px" mr={0} />
            <AlertTitle mt={4} mb={1} fontSize="lg">
              販売中の商品がありません。
            </AlertTitle>
            <AlertDescription maxWidth="sm">
              商品制作が完了するまで今しばらくお待ち下さい。
            </AlertDescription>
          </Alert>
        </div>
      )}
    </>
  );
}
