import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Linking,
  Share,
  SafeAreaView,
} from 'react-native';
import { getContactById, getCategoryById } from '../data/yellowPagesData';

const ContactDetailScreen = ({ navigation, route }) => {
  const contact = getContactById(route.params.contactId);
  const category = contact ? getCategoryById(contact.categoryId) : null;

  if (!contact) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.errorText}>Contact not found.</Text>
      </SafeAreaView>
    );
  }

  const initial = contact.name.charAt(0).toUpperCase();

  const handleCall = () => {
    const phone = contact.phone.replace(/\s/g, '');
    Linking.openURL(`tel:${phone}`);
  };

  const handleShare = async () => {
    await Share.share({
      message: `${contact.name}\n${contact.phone}\n${contact.address}`,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        {/* Header */}
        <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
          <Text style={styles.backText}>← Back</Text>
        </TouchableOpacity>

        {/* Avatar + Name */}
        <View style={styles.profileSection}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>{initial}</Text>
          </View>
          <Text style={styles.name}>{contact.name}</Text>
          {category && (
            <View style={styles.badge}>
              <Text style={styles.badgeText}>
                {category.emoji} {category.name}
              </Text>
            </View>
          )}
          <View style={styles.availabilityRow}>
            <View
              style={[
                styles.dot,
                { backgroundColor: contact.available ? '#4CAF50' : '#F44336' },
              ]}
            />
            <Text style={styles.availabilityText}>
              {contact.available ? 'Available' : 'Unavailable'}
            </Text>
          </View>
        </View>

        {/* Action Buttons */}
        <View style={styles.actions}>
          <TouchableOpacity style={styles.callBtn} onPress={handleCall}>
            <Text style={styles.callBtnText}>📞 Call</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.shareBtn} onPress={handleShare}>
            <Text style={styles.shareBtnText}>📤 Share</Text>
          </TouchableOpacity>
        </View>

        {/* Details Card */}
        <View style={styles.card}>
          <DetailRow label="Phone" value={contact.phone} />
          <DetailRow label="Address" value={contact.address} />
          <DetailRow label="Experience" value={contact.experience} />
          <DetailRow label="About" value={contact.description} isLast />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const DetailRow = ({ label, value, isLast }) => (
  <View style={[styles.detailRow, !isLast && styles.detailBorder]}>
    <Text style={styles.detailLabel}>{label}</Text>
    <Text style={styles.detailValue}>{value}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E3F2FD',
  },
  scroll: {
    padding: 20,
    paddingTop: 10,
  },
  errorText: {
    fontSize: 16,
    color: '#F44336',
    textAlign: 'center',
    marginTop: 100,
  },
  backBtn: {
    marginBottom: 10,
    alignSelf: 'flex-start',
  },
  backText: {
    fontSize: 16,
    color: '#1976D2',
    fontWeight: '600',
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 24,
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: '#1976D2',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 14,
  },
  avatarText: {
    color: '#fff',
    fontSize: 38,
    fontWeight: '700',
  },
  name: {
    fontSize: 24,
    fontWeight: '700',
    color: '#333',
    marginBottom: 8,
  },
  badge: {
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 6,
    marginBottom: 10,
  },
  badgeText: {
    fontSize: 14,
    color: '#1976D2',
    fontWeight: '500',
  },
  availabilityRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 6,
  },
  availabilityText: {
    fontSize: 14,
    color: '#666',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 24,
    gap: 12,
  },
  callBtn: {
    flex: 1,
    backgroundColor: '#1976D2',
    borderRadius: 12,
    padding: 14,
    alignItems: 'center',
  },
  callBtnText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  shareBtn: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 14,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#1976D2',
  },
  shareBtnText: {
    color: '#1976D2',
    fontSize: 16,
    fontWeight: '600',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 8,
  },
  detailRow: {
    paddingVertical: 14,
  },
  detailBorder: {
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  detailLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: '#999',
    textTransform: 'uppercase',
    marginBottom: 4,
  },
  detailValue: {
    fontSize: 16,
    color: '#333',
    lineHeight: 22,
  },
});

export default ContactDetailScreen;
