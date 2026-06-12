class AuthValidators {
  static String? email(String? value) {
    final email = value?.trim() ?? '';
    final pattern = RegExp(r'^[^@\s]+@[^@\s]+\.[^@\s]+$');
    if (email.isEmpty) return 'Email is required';
    if (!pattern.hasMatch(email)) return 'Enter a valid email address';
    return null;
  }

  static String? requiredText(String? value, String label) {
    if ((value ?? '').trim().isEmpty) return '$label is required';
    return null;
  }

  static String? password(String? value) {
    final password = value ?? '';
    if (password.isEmpty) return 'Password is required';
    if (password.length < 8) return 'Use at least 8 characters';
    return null;
  }

  static String? strongPassword(String? value) {
    final base = password(value);
    if (base != null) return base;
    final rawPassword = value ?? '';
    if (!RegExp(r'[A-Z]').hasMatch(rawPassword) ||
        !RegExp(r'[0-9]').hasMatch(rawPassword)) {
      return 'Add a capital letter and a number';
    }
    return null;
  }
}
