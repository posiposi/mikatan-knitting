import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import IndexCard from '@/Components/Items/IndexCard';
import { Grid, GridItem } from '@chakra-ui/react';
import Header from '@/Layouts/Header';
import axios, { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';

// TODO typeに切り出し
interface ItemsList {
  item_id: string;
  item_name: string;
  description: string;
  status: string;
  image: string;
  price_id: string;
  price_without_tax: number;
  price_with_tax: number;
  tax_rate: number;
}

export default function Welcome({
  auth,
}: PageProps<{ laravelVersion: string; phpVersion: string }>) {
  const [items, setItems] = useState<ItemsList[]>([]);
  useEffect(() => {
    axios.get('/api/v1/items').then((response: AxiosResponse<ItemsList[]>) => {
      setItems(response.data);
    });
  }, []);

  return (
    <>
      <Head title="Welcome" />
      <div>
        <Header cartItemCount={2} auth={auth} />
      </div>
      <div className="relative sm:flex sm:justify-center sm:items-center min-h-screen">
        <div className="max-w-7xl mx-auto p-6 lg:p-8">
          <Grid templateColumns="repeat(2, 1fr)" gap={6} px={5} py={5}>
            {items?.map((item: ItemsList) => (
              <GridItem key={item.item_id}>
                <IndexCard props={item} />
              </GridItem>
            ))}
          </Grid>
        </div>
      </div>
    </>
  );
}
