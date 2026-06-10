import 'package:flutter/material.dart';

import 'auth_models.dart';
import 'auth_validators.dart';
import 'widgets/auth_background.dart';
import 'widgets/auth_button.dart';
import 'widgets/auth_field.dart';
import 'widgets/auth_scaffold.dart';
import 'widgets/brand_lockup.dart';
import 'widgets/form_status_banner.dart';
import 'widgets/social_button.dart';

class LoginScreen extends StatefulWidget {
  const LoginScreen({required this.onCreateAccount, super.key});

  final VoidCallback onCreateAccount;

  @override
  State<LoginScreen> createState() => _LoginScreenState();
}

class _LoginScreenState extends State<LoginScreen> {
  final _formKey = GlobalKey<FormState>();
  final _emailController = TextEditingController(text: 'traveler@xplore.lk');
  final _passwordController = TextEditingController();
  final _authService = FakeAuthService();

  bool _obscurePassword = true;
  bool _rememberMe = true;
  bool _loading = false;
  String? _error;
  String? _success;

  @override
  void dispose() {
    _emailController.dispose();
    _passwordController.dispose();
    super.dispose();
  }

  Future<void> _submit() async {
    FocusScope.of(context).unfocus();
    setState(() {
      _error = null;
      _success = null;
    });

    if (!_formKey.currentState!.validate()) return;

    setState(() => _loading = true);
    final result = await _authService.signIn(
      email: _emailController.text.trim(),
      password: _passwordController.text,
    );
    if (!mounted) return;

    setState(() {
      _loading = false;
      if (result.isSuccess) {
        _success = 'Welcome back. Your Sri Lanka itinerary hub is ready.';
      } else {
        _error = result.message;
      }
    });
  }

  @override
  Widget build(BuildContext context) {
    return AuthBackground(
      child: AuthScaffold(
        previewTitle: 'Plan. Book. Explore.',
        previewSubtitle:
            'Trusted routes, verified vendors, and personalized journeys across Sri Lanka.',
        child: Form(
          key: _formKey,
          child: AutofillGroup(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.stretch,
              children: [
                const BrandLockup(),
                const SizedBox(height: 30),
                Text(
                  'Welcome back',
                  style: Theme.of(context).textTheme.headlineMedium,
                ),
                const SizedBox(height: 8),
                Text(
                  'Sign in to continue planning your next escape.',
                  style: Theme.of(context).textTheme.bodyMedium?.copyWith(
                    color: Theme.of(context).colorScheme.onSurfaceVariant,
                  ),
                ),
                const SizedBox(height: 24),
                FormStatusBanner(error: _error, success: _success),
                AuthField(
                  controller: _emailController,
                  label: 'Email address',
                  hint: 'you@example.com',
                  icon: Icons.mail_outline_rounded,
                  keyboardType: TextInputType.emailAddress,
                  textInputAction: TextInputAction.next,
                  autofillHints: const [AutofillHints.email],
                  validator: AuthValidators.email,
                ),
                const SizedBox(height: 14),
                AuthField(
                  controller: _passwordController,
                  label: 'Password',
                  hint: 'Your secure password',
                  icon: Icons.lock_outline_rounded,
                  obscureText: _obscurePassword,
                  textInputAction: TextInputAction.done,
                  autofillHints: const [AutofillHints.password],
                  validator: AuthValidators.password,
                  onFieldSubmitted: (_) => _submit(),
                  trailing: IconButton(
                    tooltip: _obscurePassword
                        ? 'Show password'
                        : 'Hide password',
                    onPressed: () {
                      setState(() => _obscurePassword = !_obscurePassword);
                    },
                    icon: Icon(
                      _obscurePassword
                          ? Icons.visibility_outlined
                          : Icons.visibility_off_outlined,
                    ),
                  ),
                ),
                const SizedBox(height: 10),
                Row(
                  children: [
                    Checkbox(
                      value: _rememberMe,
                      onChanged: (value) {
                        setState(() => _rememberMe = value ?? true);
                      },
                    ),
                    const Expanded(child: Text('Remember this device')),
                    TextButton(
                      onPressed: _loading ? null : () {},
                      child: const Text('Forgot?'),
                    ),
                  ],
                ),
                const SizedBox(height: 12),
                AuthButton(
                  label: 'Sign In',
                  loadingLabel: 'Checking route...',
                  isLoading: _loading,
                  onPressed: _submit,
                ),
                const SizedBox(height: 22),
                const SocialButton(label: 'Continue with Google'),
                const SizedBox(height: 22),
                Wrap(
                  alignment: WrapAlignment.center,
                  crossAxisAlignment: WrapCrossAlignment.center,
                  spacing: 2,
                  children: [
                    Text(
                      'New to Xplore?',
                      style: TextStyle(
                        color: Theme.of(context).colorScheme.onSurfaceVariant,
                      ),
                    ),
                    TextButton(
                      onPressed: _loading ? null : widget.onCreateAccount,
                      child: const Text('Create account'),
                    ),
                  ],
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
