enum AuthMode { login, register }

class AuthResult {
  const AuthResult.success() : message = null;
  const AuthResult.failure(this.message);

  final String? message;
  bool get isSuccess => message == null;
}

class FakeAuthService {
  Future<AuthResult> signIn({
    required String email,
    required String password,
  }) async {
    await Future<void>.delayed(const Duration(milliseconds: 1100));
    if (email.toLowerCase().contains('blocked')) {
      return const AuthResult.failure(
        'We could not verify this account. Try another email or reset your password.',
      );
    }
    return const AuthResult.success();
  }

  Future<AuthResult> createAccount({
    required String name,
    required String email,
    required String password,
    required bool acceptsTerms,
  }) async {
    await Future<void>.delayed(const Duration(milliseconds: 1300));
    if (email.toLowerCase().endsWith('@taken.com')) {
      return const AuthResult.failure(
        'That email is already connected to an Xplore account.',
      );
    }
    return const AuthResult.success();
  }
}
