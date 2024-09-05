import React, { useState } from "react";
import { View, Text, FlatList, Image, Pressable } from "react-native";
import tailwind from "twrnc";
import { FontAwesome } from "@expo/vector-icons"; // Importar o ícone

const mockAlbums = [
  {
    id: '1',
    title: 'Viagem 2023',
    thumbnail: 'https://via.placeholder.com/150',
    isAlbum: true, // Define que é um álbum
  },
  {
    id: '2',
    title: 'Família',
    thumbnail: 'https://via.placeholder.com/150',
    isAlbum: true,
  },
  {
    id: '3',
    title: 'Trabalho',
    thumbnail: 'https://via.placeholder.com/150',
    isAlbum: true,
  },
  {
    id: '4',
    title: 'Amigos',
    thumbnail: 'https://via.placeholder.com/150',
    isAlbum: true,
  },
];

export const Gallery = () => {
  const [selectedAlbum, setSelectedAlbum] = useState(null);

  // Função para renderizar os álbuns
  const renderAlbum = ({ item }) => (
    <Pressable onPress={() => setSelectedAlbum(item.id)} style={tailwind`p-2`}>
      <View style={tailwind`bg-gray-800 p-4 rounded-lg items-center w-40`}> {/* Tamanho padronizado */}
        {item.isAlbum ? (
          <FontAwesome name="folder" size={64} color="#D3D3D3" /> 
        ) : (
          <Image
            source={{ uri: item.thumbnail }}
            style={tailwind`w-32 h-32 rounded-lg`}
          />
        )}
        <Text style={tailwind`text-white mt-2 text-lg font-bold text-center`}>
          {item.title}
        </Text>
      </View>
    </Pressable>
  );

  return (
    <View style={tailwind`flex-1 bg-gray-950 p-4`}>
      <Text style={tailwind`text-4xl text-white font-bold mb-6`}>
        {selectedAlbum ? 'Fotos' : 'Álbuns'}
      </Text>

      {selectedAlbum ? (
        // Exibir fotos do álbum selecionado
        <FlatList
          data={[...Array(10)].map((_, index) => ({
            id: `${index}`,
            image: 'https://via.placeholder.com/150',
          }))}
          renderItem={({ item }) => (
            <Image
              source={{ uri: item.image }}
              style={tailwind`w-40 h-40 m-2 rounded-lg`}
            />
          )}
          numColumns={2}
          keyExtractor={(item) => item.id}
        />
      ) : (
        // Renderizar a lista de álbuns
        <FlatList
          data={mockAlbums}
          renderItem={renderAlbum}
          keyExtractor={(item) => item.id}
          numColumns={2} // Definir duas colunas por linha
        />
      )}
    </View>
  );
};
