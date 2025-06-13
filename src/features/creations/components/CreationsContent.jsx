import {
  Box,
  Heading,
  Text,
  VStack,
  SimpleGrid,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  HStack,
  Tag,
  TagLabel,
  TagLeftIcon,
} from "@chakra-ui/react";
import Card from "../../../shared/ui/Card";
import CardImage from "../../../shared/ui/CardImage";
import { useState } from "react";
import { FaBook, FaUser } from "react-icons/fa";
import { useTranslation } from "../../../hooks/useTranslation";
import NeonBeamDivider from "../../../shared/components/NeonBeamDivider";
import patteAPatte from "../../../assets/img/patte/patte_a_patte.svg";
import patte from "../../../assets/img/patte/patte.svg";
import oiseau from "../../../assets/img/patte/oiseau.svg";
import chien1 from "../../../assets/img/patte/chien 1.svg";
import chien2 from "../../../assets/img/patte/chien 2.svg";
import chat1 from "../../../assets/img/patte/Chat 1.svg";
import chat2 from "../../../assets/img/patte/chat 2.svg";
import chat3 from "../../../assets/img/patte/chat 3.svg";

const visualData = [
  { id: 1, titleKey: "cat1", image: chat1 },
  { id: 2, titleKey: "cat2", image: chat2 },
  { id: 3, titleKey: "cat3", image: chat3 },
  { id: 4, titleKey: "dog1", image: chien1 },
  { id: 5, titleKey: "dog2", image: chien2 },
  { id: 6, titleKey: "bird", image: oiseau },
  { id: 7, titleKey: "patteAPatte", image: patteAPatte },
  { id: 8, titleKey: "patte", image: patte },
];

const textData = [
  { id: 1, entryKey: "entry1", category: "perso" },
  { id: 2, entryKey: "entry2", category: "litteraire" },
  { id: 3, entryKey: "entry3", category: "litteraire" },
  { id: 4, entryKey: "entry4", category: "perso" },
  { id: 5, entryKey: "entry5", category: "perso" },
  { id: 6, entryKey: "entry6", category: "histoire" },
  { id: 7, entryKey: "entry7", category: "histoire" },
];

const categories = [
  { id: "all", labelKey: "all", icon: null },
  { id: "litteraire", labelKey: "literary", icon: FaBook },
  { id: "histoire", labelKey: "history", icon: FaBook },
  { id: "perso", labelKey: "personal", icon: FaUser },
];

const CreationsContent = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedText, setSelectedText] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedVisual, setSelectedVisual] = useState(null);
  const { t } = useTranslation();

  const handleTextClick = (text) => {
    setSelectedText(text);
    onOpen();
  };

  const handleVisualClick = (visual) => {
    setSelectedVisual(visual);
  };

  const getExcerpt = (text, maxLength = 200) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + "...";
  };

  const filteredTexts = textData.filter(
    (text) => selectedCategory === "all" || text.category === selectedCategory
  );

  return (
    <Tabs variant="line" colorScheme="gray">
      <TabList
        sx={{
          borderBottom: "none",
        }}
      >
        <Tab
          _selected={{
            color: "brand.neon",
            borderColor: "brand.neon",
            mb: "4px",
            textShadow: "0 0 10px rgba(0, 255, 157, 0.5)",
          }}
          color="gray.400"
          _hover={{
            color: "brand.neon",
            textShadow: "0 0 10px rgba(0, 255, 157, 0.3)",
          }}
        >
          {t("creations.tabs.visuals")}
        </Tab>
        <Tab
          _selected={{
            color: "brand.neon",
            borderColor: "brand.neon",
            mb: "4px",
            textShadow: "0 0 10px rgba(0, 255, 157, 0.5)",
          }}
          color="gray.400"
          _hover={{
            color: "brand.neon",
            textShadow: "0 0 10px rgba(0, 255, 157, 0.3)",
          }}
        >
          {t("creations.tabs.texts")}
        </Tab>
      </TabList>
      <NeonBeamDivider my={2} />

      <TabPanels mt={8}>
        {/* Panel Visuels */}
        <TabPanel p={0}>
          <VStack spacing={8} align="stretch">
            <Text fontSize="lg" color="gray.300">
              {t("creations.visuals.description")}
            </Text>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
              {visualData.map((item) => (
                <Card key={item.id}>
                  <CardImage
                    src={item.image}
                    alt={t(`creations.visuals.titles.${item.titleKey}`)}
                    style={{
                      width: "180px",
                      height: "180px",
                      objectFit: "contain",
                      margin: "0 auto",
                      display: "block",
                      marginTop: 24,
                    }}
                  />
                  <Box p={4} textAlign="center">
                    <Heading size="md" mb={2} mt={6}>
                      {t(`creations.visuals.titles.${item.titleKey}`)}
                    </Heading>
                    <Button
                      mt={2}
                      colorScheme="black"
                      variant="outline"
                      borderColor="brand.neon"
                      color="brand.neon"
                      _hover={{
                        bg: "black",
                        color: "white",
                        borderColor: "brand.neon",
                        boxShadow: "0 0 10px #00ff9d99",
                      }}
                      onClick={() => handleVisualClick(item)}
                    >
                      {t("creations.visuals.viewDetail")}
                    </Button>
                  </Box>
                </Card>
              ))}
            </SimpleGrid>
          </VStack>
          {/* Modal visuel */}
          <Modal
            isOpen={!!selectedVisual}
            onClose={() => setSelectedVisual(null)}
            size="3xl"
          >
            <ModalOverlay />
            <ModalContent
              bg="black"
              color="gray.200"
              border="2px solid"
              borderColor="brand.neon"
              boxShadow="0 0 30px 0 rgba(0,255,157,0.4)"
              maxW="90vw"
            >
              <ModalHeader
                color="brand.neon"
                textShadow="0 0 10px #00ff9d, 0 0 20px #00ff9d"
                textAlign="center"
              >
                {t(`creations.visuals.titles.${selectedVisual?.titleKey}`)}
              </ModalHeader>
              <ModalCloseButton
                color="brand.neon"
                _hover={{ bg: "gray.800", color: "white" }}
                onClick={() => setSelectedVisual(null)}
              />
              <ModalBody
                pb={6}
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                {selectedVisual && (
                  <img
                    src={selectedVisual.image}
                    alt={t(
                      `creations.visuals.titles.${selectedVisual.titleKey}`
                    )}
                    style={{
                      width: "100%",
                      height: "auto",
                      maxWidth: "80vw",
                      maxHeight: "65vh",
                      objectFit: "contain",
                      boxShadow: "0 0 30px #00ff9d33",
                    }}
                  />
                )}
              </ModalBody>
            </ModalContent>
          </Modal>
        </TabPanel>

        {/* Panel Textes */}
        <TabPanel p={0}>
          <VStack spacing={8} align="stretch">
            <HStack spacing={4} wrap="wrap">
              {categories.map((category) => {
                const isSelected = selectedCategory === category.id;
                return (
                  <Tag
                    key={category.id}
                    size="lg"
                    variant="outline"
                    cursor="pointer"
                    onClick={() => setSelectedCategory(category.id)}
                    bg="transparent"
                    color={isSelected ? "brand.neon" : "white"}
                    borderColor="brand.neon"
                    fontWeight={isSelected ? "bold" : "normal"}
                    fontSize="md"
                    px={6}
                    py={2}
                    _hover={{
                      color: "brand.neon",
                      borderColor: "brand.neon",
                      "& svg": { color: "var(--chakra-colors-brand-neon)" },
                    }}
                    transition="all 0.2s"
                  >
                    {category.icon && (
                      <TagLeftIcon
                        as={category.icon}
                        color={isSelected ? "brand.neon" : "white"}
                      />
                    )}
                    <TagLabel>
                      {(() => {
                        const key = `creations.texts.categories.${category.labelKey}`;
                        const translation = t(key);
                        if (translation === key) {
                          if (category.id === "litteraire") return "Littéraire";
                          if (category.id === "histoire") return "Histoire";
                          if (category.id === "perso") return "Personnel";
                          if (category.id === "all") return "Tous";
                          return category.labelKey;
                        }
                        return translation;
                      })()}
                    </TagLabel>
                  </Tag>
                );
              })}
            </HStack>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
              {filteredTexts.map((text) => (
                <Card
                  key={text.id}
                  onClick={() => handleTextClick(text)}
                  cursor="pointer"
                >
                  <Box p={4}>
                    <Heading size="md" mb={2}>
                      {t(`creations.texts.entries.${text.entryKey}.title`)}
                    </Heading>
                    <Text>
                      {getExcerpt(
                        t(`creations.texts.entries.${text.entryKey}.content`)
                      )}
                    </Text>
                  </Box>
                </Card>
              ))}
            </SimpleGrid>
          </VStack>
        </TabPanel>
      </TabPanels>

      {/* Modal pour afficher le texte complet */}
      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent
          bg="black"
          color="gray.200"
          border="2px solid"
          borderColor="brand.neon"
          boxShadow="0 0 30px 0 rgba(0,255,157,0.4)"
        >
          <ModalHeader
            color="brand.neon"
            textShadow="0 0 10px #00ff9d, 0 0 20px #00ff9d"
          >
            {t(`creations.texts.entries.${selectedText?.entryKey}.title`)}
          </ModalHeader>
          <ModalCloseButton
            color="brand.neon"
            _hover={{ bg: "gray.800", color: "white" }}
          />
          <ModalBody pb={6}>
            {selectedText &&
              t(`creations.texts.entries.${selectedText.entryKey}.intro`) !==
                `creations.texts.entries.${selectedText.entryKey}.intro` && (
                <Text fontStyle="italic" color="gray.400" mb={4}>
                  {t(`creations.texts.entries.${selectedText.entryKey}.intro`)}
                </Text>
              )}
            <Text whiteSpace="pre-wrap" color="gray.300">
              {t(`creations.texts.entries.${selectedText?.entryKey}.content`)}
            </Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Tabs>
  );
};

export default CreationsContent;
