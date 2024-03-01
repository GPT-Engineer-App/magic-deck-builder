import React, { useState } from "react";
import { Box, Button, Container, Heading, Input, Stack, Textarea, VStack, Image, Divider, List, ListItem, ListIcon, IconButton } from "@chakra-ui/react";
import { FaPlus, FaSearch, FaTrash } from "react-icons/fa";

const Index = () => {
  const [cardInput, setCardInput] = useState("");
  const [cardList, setCardList] = useState([]);

  const handleAddCard = () => {
    if (cardInput.trim() !== "" && !cardList.includes(cardInput.trim())) {
      setCardList([...cardList, cardInput.trim()]);
      setCardInput("");
    }
  };

  const handleRemoveCard = (cardToRemove) => {
    setCardList(cardList.filter((card) => card !== cardToRemove));
  };

  const handleCardInputKeyPress = (event) => {
    if (event.key === "Enter") {
      handleAddCard();
    }
  };

  const handleBuildDeck = () => {
    // Placeholder function - this would be where you call an API or service
    // to calculate the best deck based on the cardList.
    console.log("Building deck with cards:", cardList);
    // The actual deck building logic and API integration would go here.
  };

  return (
    <Container maxW="container.lg" py={8}>
      <VStack spacing={8}>
        <Box textAlign="center">
          <Heading as="h1" size="xl" mb={2}>
            MTG Commander Deck Builder
          </Heading>
          <Text fontSize="lg">Build the best commander deck based on your card collection.</Text>
        </Box>
        <Divider />
        <Box width="100%">
          <Stack direction={{ base: "column", md: "row" }} spacing={4} mb={4}>
            <Input value={cardInput} onChange={(e) => setCardInput(e.target.value)} placeholder="Enter a card name" onKeyPress={handleCardInputKeyPress} />
            <Button leftIcon={<FaPlus />} colorScheme="blue" onClick={handleAddCard}>
              Add Card
            </Button>
          </Stack>
          <List spacing={3}>
            {cardList.map((card, index) => (
              <ListItem key={index} display="flex" alignItems="center">
                <ListIcon as={FaSearch} color="green.500" />
                {card}
                <IconButton aria-label={`Delete ${card}`} icon={<FaTrash />} size="sm" colorScheme="red" variant="ghost" ml="auto" onClick={() => handleRemoveCard(card)} />
              </ListItem>
            ))}
          </List>
        </Box>
        <Button leftIcon={<FaSearch />} colorScheme="teal" size="lg" isFullWidth onClick={handleBuildDeck}>
          Build Deck
        </Button>
        <Divider />
        <Box>
          <Heading as="h2" size="md" mb={2}>
            Sample Deck Image
          </Heading>
          <Image src="https://images.unsplash.com/photo-1496449903678-68ddcb189a24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtYWdpYyUyMHRoZSUyMGdhdGhlcmluZyUyMGRlY2t8ZW58MHx8fHwxNzA5MzA4NDg5fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Sample Magic the Gathering Deck" borderRadius="md" />
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
