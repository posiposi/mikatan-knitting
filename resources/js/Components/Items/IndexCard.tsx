import {
  Card,
  CardBody,
  CardFooter,
  ButtonGroup,
  Button,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
} from '@chakra-ui/react';

interface IndexCardProps {
  props: {
    item_id: string;
    item_name: string;
    description: string;
    status: string;
    image: string;
    price_id: string;
    price_without_tax: number;
    price_with_tax: number;
    tax_rate: number;
  };
}

const IndexCard = ({ props }: IndexCardProps) => {
  console.log(props);
  return (
    <Card maxW="sm">
      <CardBody>
        <Image
          src={props.image}
          alt="Green double couch with wooden legs"
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">{props.item_name}</Heading>
          <Text>{props.description}</Text>
          <Text color="blue.600" fontSize="2xl">
            $450
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button variant="solid" colorScheme="blue">
            Buy now
          </Button>
          <Button variant="ghost" colorScheme="blue">
            Add to cart
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default IndexCard;
