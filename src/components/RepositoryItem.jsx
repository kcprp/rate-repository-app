import { View, StyleSheet, Image } from "react-native";
import Text from "./Text";

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: 'white',
    display: 'flex',
    gap: 10,
  },
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 16,
    marginLeft: 16,
    gap: 14
  },
  statsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  headerTextContainer: {
    gap: 4
  },
  description: {
    maxWidth: '90%',
  },
  statItem: {
    alignItems: 'center',
    gap: 6,
    marginBottom: 10
  },
  languageBadge: {
    alignSelf: 'flex-start',
    color: 'white',
    backgroundColor: '#0366d6',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 4,
    overflow: 'hidden'
  },
  avatarImage: {
    width: 48,
    height: 48,
    borderRadius: 4,
  }
})

const formatCount = value => {
  if (value >= 1000) {
    return (value / 1000).toFixed(1).replace(/\.0$/, '') + 'k';
  }
  return String(value);
};

const RepositoryHeader = ({ item }) => (
  <View style={styles.headerContainer}>
    <Image source={{ uri: item.ownerAvatarUrl }} style={styles.avatarImage} />
    <View style={styles.headerTextContainer}>
      <Text fontWeight='bold'>{item.fullName}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <Text style={styles.languageBadge}>{item.language}</Text>
    </View>
  </View>
);

const RepositoryStat = ({ value, label, format = false }) => (
  <View style={styles.statItem}>
    <Text fontWeight='bold'>{format ? formatCount(value) : value}</Text>
    <Text>{label}</Text>
  </View>
);

const RepositoryStats = ({ item }) => (
  <View style={styles.statsContainer}>
    <RepositoryStat value={item.stargazersCount} label='Stars' format />
    <RepositoryStat value={item.forksCount} label='Forks' format />
    <RepositoryStat value={item.reviewCount} label='Reviews' />
    <RepositoryStat value={item.ratingAverage} label='Rating' />
  </View>
);

const RepositoryItem = ({ item }) => (
  <View testID="repositoryItem" style={styles.itemContainer}>
    <RepositoryHeader item={item} />
    <RepositoryStats item={item} />
  </View>
);

export default RepositoryItem;