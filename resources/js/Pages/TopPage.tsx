import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import IndexCard from '@/Components/Items/IndexCard';
import { Grid, GridItem } from '@chakra-ui/react';
import Header from '@/Layouts/Header';

export default function Welcome({
  auth,
}: PageProps<{ laravelVersion: string; phpVersion: string }>) {
  return (
    <>
      <Head title="Welcome" />
      <div>
        <Header cartItemCount={2} auth={auth} />
      </div>
      <div className="relative sm:flex sm:justify-center sm:items-center min-h-screen">
        <div className="max-w-7xl mx-auto p-6 lg:p-8">
          <Grid templateColumns="repeat(2, 1fr)" gap={6} px={5} py={5}>
            {[1, 2, 3, 4, 5, 6].map(() => (
              <GridItem>
                <IndexCard />
              </GridItem>
            ))}
          </Grid>
        </div>
      </div>
    </>
  );
}
