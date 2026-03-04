import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { getCategoryById } from '../data/yellowPagesData';

const ContactCard = ({ contact, onPress, showCategory = false }) => {
  const initial = contact.name.charAt(0).toUpperCase();
  const category = showCategory ? getCategoryById(contact.categoryId) : null;

  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.7}>
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>{initial}</Text>
      </View>
      <View style={styles.info}>
        <Text style={styles.name}>{contact.name}</Text>
        <Text style={styles.phone}>{contact.phone}</Text>
        <Text style={styles.address} numberOfLines={1}>
          {contact.address}
        </Text>
        {category && (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>
              {category.emoji} {category.name}
            </Text>
          </View>
        )}
      </View>
      <View style={[styles.dot, { backgroundColor: contact.available ? '#4CAF50' : '#F44336' }]} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 3,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#1976D2',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },
  avatarText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '700',
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  phone: {
    fontSize: 13,
    color: '#1976D2',
    marginTop: 2,
  },
  address: {
    fontSize: 12,
    color: '#888',
    marginTop: 2,
  },
  badge: {
    alignSelf: 'flex-start',
    backgroundColor: '#E3F2FD',
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 3,
    marginTop: 6,
  },
  badgeText: {
    fontSize: 11,
    color: '#1976D2',
    fontWeight: '500',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginLeft: 8,
  },
});

export default ContactCard;
