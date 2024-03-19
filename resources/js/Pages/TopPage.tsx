import { Link, Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import IndexCard from '@/Components/Items/IndexCard';
import { Grid, GridItem } from '@chakra-ui/react';

export default function Welcome({
  auth,
}: PageProps<{ laravelVersion: string; phpVersion: string }>) {
  return (
    <>
      <Head title="Welcome" />
      <div className="relative sm:flex sm:justify-center sm:items-center min-h-screen">
        <div className="sm:fixed sm:top-0 sm:right-0 p-6 text-end">
          {auth.user ? (
            <Link
              href={route('dashboard')}
              className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400"
            >
              Dashboard
            </Link>
          ) : (
            <>
              <Link
                href={route('login')}
                className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400"
              >
                Log in
              </Link>

              <Link
                href={route('register')}
                className="ms-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400"
              >
                Register
              </Link>
            </>
          )}
        </div>

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
