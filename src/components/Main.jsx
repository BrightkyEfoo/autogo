import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Icon,
  Image,
  Text,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Navigation, Thumbs, Autoplay } from 'swiper';
import './swiper-bundle.css';
import './style.css';
import Advantages from './Advantages';
import { typeCarDesc, homeSwiperSlides } from '../Data';
import { mainBoxesStyle, SlideBoxContainerStyle } from '../style';
import { AiFillFileText, AiFillSetting, AiFillStar } from 'react-icons/ai';
import { FaRocket } from 'react-icons/fa';
import { BiSync } from 'react-icons/bi';
import Footer from './Footer';

SwiperCore.use([Navigation, Pagination, Thumbs, Autoplay]);
const Main = () => {
  const [selected, setSelected] = useState(1);

  // for categories of car
  let t = typeCarDesc.map(element => element.catergorie);

  let a = [];
  t.forEach(element => {
    a.push(
      <Flex
        justify="center"
        key={t.indexOf(element)}
        align="center"
        cursor="pointer"
        onClick={() => setSelected(t.indexOf(element) + 1)}
        borderBottomWidth={selected === t.indexOf(element) + 1 ? 4 : 2}
        borderBottomColor={
          selected === t.indexOf(element) + 1 ? 'blue.400' : 'black'
        }
        color={selected === t.indexOf(element) + 1 ? 'white' : 'black'}
        bgColor={selected === t.indexOf(element) + 1 ? 'black' : 'transparent'}
        p={3}
      >
        Categorie {element}
      </Flex>
    );
  });
  //end of car categories reddy for rendering

  //for main slider
  let mainSlides = homeSwiperSlides.map(element => {
    return (
      <SwiperSlide key={'s' + homeSwiperSlides.indexOf(element)}>
        <Flex {...SlideBoxContainerStyle}>
          <Text m={0} p={0} fontSize={100} fontWeight={900} color="blue.400">
            {element.title}
          </Text>
        </Flex>
        <Advantages
          botom={
            element.hstack ? (
              <HStack>
                {element.botom.map(e => (
                  <a href={e.route} target="_blank" rel="noreferrer">
                    <Icon {...e} key={'si' + element.botom.indexOf(e)} />
                  </a>
                ))}
              </HStack>
            ) : (
              null
              // <Icon {...element.botom} />
            )
          }
          iconeColor={element.iconeColor}
          iconeBg={element.iconeBg}
          icone={element.icone}
          titre={element.title}
          preview={element.preview}
        />
      </SwiperSlide>
    );
  });

  return (
    <Box {...mainBoxesStyle('full')}>
      <Box bgColor="blue.500" pt={25} pb={20} mb={30}>
        <Heading as="h1" fontSize={50}>
          Bienvenue chez <span id="firstSpan">AUTO</span>
          <span id="secondSpan">GO</span>
        </Heading>
        <Swiper
          spaceBetween={20}
          pagination
          navigation
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
        >
          {mainSlides}
        </Swiper>
      </Box>
      <VStack align="center" w="100vw" justify="center" mt={10} mb={10} p={4}>
        <HStack>
          <Image
            w={300}
            h={400}
            objectFit="cover"
            src="https://i.ibb.co/JRgfczf/auto-ecole-1024x682.jpg"
          />

          <VStack
            fontSize={18}
            textAlign="justify"
            maxW={700}
            alignSelf="start"
          >
            <Heading textAlign="center" color="purple.400">
              Pourquoi avoir un permis...
            </Heading>
            <Text>
              &nbsp; Peu importe ou vous soyez dans le monde, il est impératif
              pour vous de posséder un permis de conduire valide.Le permis est
              aujourd'hui un atout majeur pour l'emploi car il permet de
              rassurer un employeur, il sait que vous ne serez pas dépendant des
              transports en commun ou lorsque vous finirez tard le soir et qu'il
              n'y aura plus de transport en commun.
            </Text>
            <Text>
              &nbsp; &nbsp;Il est également à noter que ce{' '}
              <em>précieux sésame</em> est valide pour la ou les catégories
              sélectionnées.
            </Text>
            <Text> &nbsp;Pour tout savoir sur ces catégories : </Text>
            <Button type="button" colorScheme="purple" alignSelf="center">
              cliquez ici
            </Button>
          </VStack>
        </HStack>
        <HStack>
          <VStack fontSize={18} textAlign="justify" maxW={700}>
            <Heading textAlign="center" color="purple.500">
              Comment obtenir votre permis...
            </Heading>
            <Text>
              &nbsp; Pour cela vous aurez donc a passer l'examen du code de la
              route et l'épreuve pratique.
            </Text>
            <Text>
              Faisons le point de chaque catégorie de permis et des
              particularités associées.
            </Text>
            <Text>
              &nbsp;Ici nous nous concentrerons sur les types de véhicules, et
              les conditions d'inscription à ces permis{' '}
            </Text>
            <Heading
              as="h5"
              fontSize={18}
              textAlign="center"
              color="purple.500"
            >
              Voulez vous faire un test du code de la route ?
            </Heading>
            <Button type="button" colorScheme="purple" alignSelf="center">
              cliquez ici
            </Button>
          </VStack>

          <Image
            w={300}
            h={400}
            objectFit="cover"
            src="https://i.ibb.co/Cv67rbX/carkey.webp"
          />
        </HStack>
      </VStack>
      <VStack>
        <VStack
          mt={5}
          rounded="xl"
          boxShadow="4px 4px 31px 7px rgba(0,0,0,0.8)"
          w="fit-content"
          p={5}
        >
          <HStack spacing={5}>{a}</HStack>
          <VStack w={900}>
            <Text>{typeCarDesc[selected - 1].texte}</Text>
            <Image
              src={typeCarDesc[selected - 1].img}
              objectFit="cover"
              h={500}
              w={500}
            />
            <Text>{typeCarDesc[selected - 1].imgTitre}</Text>
          </VStack>
        </VStack>
      </VStack>

      <VStack direction="column" w="100vw" mt={10} mb={10}  pb={10}>
        <Heading p={5} mt={5} color="black">
          Choisissez une offre a votre convenance
        </Heading>
        <VStack
          justify="center"
          w="100vw"
          position="relative"
          bgColor="transparent"
        >
          <Flex
            align="center"
            justify="center"
            h="100%"
            w="100vw"
            position="absolute"
            top={0}
            left={0}
            zIndex={-1}
          >
            <Box h="30%" w="100vw" bgColor="blue.400"></Box>
            {/* c'est le box du bleu derriere les prix la */}
          </Flex>
          <VStack h="100%" spacing={10}>
            <HStack borderRadius={25} bgColor="white" color="black" p={0} boxShadow="0px -10px 21px 4px rgba(0,0,0,0.8)">
              <Flex
                fontSize={22}
                fontWeight={700}
                align="center"
                justify="center"
                borderLeftRadius={25}
                h="170px"
                m={0}
                p={4}
                color="blue.400"
                bgColor="blackAlpha.800"
              >
                WINGO speed
              </Flex>
              <VStack spacing={0}>
                <Text fontWeight={700}>XAF</Text>
                <Text
                  color="gray"
                  fontSize={40}
                  fontWeight={700}
                  letterSpacing={4}
                >
                  12.000
                </Text>
                <Text fontSize={15}>
                  <em>/ 02 mois</em>
                </Text>
              </VStack>
              <VStack>
                <Text
                  w="full"
                  textAlign="center"
                  borderBottomWidth={2}
                  borderBottomColor="black"
                >
                  Acces au labo <b>AUTO-GO</b>
                </Text>
                <Text
                  w="full"
                  textAlign="center"
                  borderBottomWidth={2}
                  borderBottomColor="black"
                >
                  Acces a tous les modules d'examens
                </Text>
                <Text
                  w="full"
                  textAlign="center"
                  borderBottomWidth={2}
                  borderBottomColor="black"
                >
                  Acces aux corrections et explications
                </Text>
                <Text w="full" textAlign="center">
                  Acces via la communauté
                </Text>
              </VStack>
              <VStack
                borderRightRadius={25}
                h="170px"
                color="purple.500"
                justify="center"
                maxW={64}
                bgColor="blackAlpha.800"
              >
                <Text>Debutez maintenant, satisfaction assurée </Text>
                <Button type="button" colorScheme="purple">
                  Commencez maintenant !
                </Button>
              </VStack>
            </HStack>

            <HStack borderRadius={25} bgColor="white" color="black" boxShadow="0px 10px 21px 4px rgba(0,0,0,0.8)">
              <Flex
                fontSize={30}
                fontWeight={900}
                align="center"
                justify="center"
                borderLeftRadius={25}
                h="170px"
                p={4}
                color="white"
                bgColor="blue.500"
              >
                WINGO premium
              </Flex>
              <VStack spacing={0}>
                <Text fontWeight={900}>XAF</Text>
                <Text
                  color="blue.500"
                  fontSize={50}
                  fontWeight={900}
                  letterSpacing={5}
                >
                  18.500
                </Text>
                <Text fontSize={15}>
                  <em>/ 03 mois</em>
                </Text>
              </VStack>
              <VStack>
                <Text
                  w="full"
                  textAlign="center"
                  borderBottomWidth={2}
                  borderBottomColor="black"
                >
                  Acces au labo <b>AUTO-GO</b>
                </Text>
                <Text
                  w="full"
                  textAlign="center"
                  borderBottomWidth={2}
                  borderBottomColor="black"
                >
                  Acces a tous les modules d'examens
                </Text>
                <Text
                  w="full"
                  textAlign="center"
                  borderBottomWidth={2}
                  borderBottomColor="black"
                >
                  Acces aux corrections et explications
                </Text>
                <Text w="full" textAlign="center">
                  Acces via la communauté
                </Text>
              </VStack>
              <VStack
                borderRightRadius={25}
                h="170px"
                color="white"
                justify="center"
                maxW={64}
                bgColor="blue.500"
              >
                <Text>Debutez maintenant, satisfaction assurée </Text>
                <Button color="blue.400" type="button">
                  Commencez maintenant !
                </Button>
              </VStack>
            </HStack>
          </VStack>
        </VStack>
      </VStack>
      <Flex align="center" justify="center" mt={20} mb={20}>
        <Flex
          position="relative"
          w="75%"
          p={16}
          align="center"
          justify="center"
          bgColor = 'white'
          boxShadow="4px 4px 31px 7px rgba(0,0,0,0.8)"
          rounded = 'xl'
        >
          <Flex
          position='absolute'
          left='-100px'
            align="center"
            justify="center"
            fontSize={50}
            fontWeight={900}
            color="black"
            boxShadow = "6px 0 10px 2px rgba(0,0,0,0.8)"
            h='97%'
            w={350}
            bgColor = 'blue.400'
            rounded='lg'
            direction='column'
          >
            <Icon as={AiFillStar} fontSize={120} color='white' />
            <Text m={5}>SUPER EASY</Text>
            
          </Flex>
          <Box w={500} fontSize={25}  p={5} >
            <em>
              "Suivez les cours selon votre emploi de temps journalier, ou que
              vous soyez et passez des tests de connaissance reguliers pour
              rester au top"
            </em>
          </Box>

          <Flex
          position='absolute'
          right='-100px'
            align="center"
            justify="center"
            fontSize={50}
            fontWeight={900}
            color="black"
            boxShadow = "-6px 0 10px 2px rgba(0,0,0,0.8)"
            h='97%'
            w={350}
            bgColor = 'blue.400'
            rounded='lg'
            direction='column'
          >
            <Icon as={FaRocket} fontSize={100} color='white' />
            <Text m={5}>SUPER FAST</Text>
            
          </Flex>
          
        </Flex>
      </Flex>
      <VStack position="relative">
        <Box
          position="absolute"
          bottom="-90px"
          zIndex={-1}
          left={0}
          w="full"
          h="200px"
          bgColor="black"
        ></Box>
        <Box p={5} fontSize={30} w="75%">
          Chez AUTO-GO, votre réussite et votre satisfaction sont nos priorités.
          Le plus dur c'est de s'engager. le reste nous en faisons notre affaire
        </Box>
        <HStack w="75%" spacing={10}>
          <VStack flex={1} borderWidth={1} rounded="lg" p={6} bgColor="white">
            <Icon
              as={AiFillSetting}
              color="white"
              bgColor="blue.400"
              p={4}
              fontSize={90}
              borderRadius="50%"
            />
            <Text fontSize={30} color="blue.400">
              WINGO Build
            </Text>
            <Text>Suivez notre formation</Text>
          </VStack>
          <VStack flex={1} borderWidth={1} rounded="lg" p={6} bgColor="white">
            <Icon
              as={AiFillFileText}
              color="white"
              bgColor="black"
              p={4}
              fontSize={100}
              borderRadius="50%"
            />
            <Text fontSize={40}>WINGO Supports</Text>
            <Text>Suivez notre formation</Text>
          </VStack>
          <VStack flex={1} borderWidth={1} rounded="lg" p={6} bgColor="white">
            <Icon
              as={BiSync}
              color="white"
              bgColor="orange.300"
              p={4}
              fontSize={90}
              borderRadius="50%"
            />
            <Text fontSize={30} color="orange.300">
              WINGO Services
            </Text>
            <Text>Suivez notre formation</Text>
          </VStack>
        </HStack>
      </VStack>
      <Footer />
    </Box>
  );
};

export default Main;
