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

class RegisterScreen extends StatefulWidget {
  const RegisterScreen({required this.onSignIn, super.key});

  final VoidCallback onSignIn;

  @override
  State<RegisterScreen> createState() => _RegisterScreenState();
}

class _RegisterScreenState extends State<RegisterScreen> {
  final _formKey = GlobalKey<FormState>();
  final _nameController = TextEditingController();
  final _emailController = TextEditingController();
  final _passwordController = TextEditingController();
  final _authService = FakeAuthService();

  bool _obscurePassword = true;
  bool _acceptsTerms = true;
  bool _loading = false;
  String? _error;
  String? _success;

  @override
  void dispose() {
    _nameController.dispose();
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
    if (!_acceptsTerms) {
      setState(
        () => _error = 'Please accept the travel safety and privacy terms.',
      );
      return;
    }

    setState(() => _loading = true);
    final result = await _authService.createAccount(
      name: _nameController.text.trim(),
      email: _emailController.text.trim(),
      password: _passwordController.text,
      acceptsTerms: _acceptsTerms,
    );
    if (!mounted) return;

    setState(() {
      _loading = false;
      if (result.isSuccess) {
        _success = 'Account created. We are preparing your explorer profile.';
      } else {
        _error = result.message;
      }
    });
  }

  @override
  Widget build(BuildContext context) {
    return AuthBackground(
      child: AuthScaffold(
        previewTitle: 'Start in Sri Lanka',
        previewSubtitle:
            'Create a profile for saved places, smart suggestions, and trusted local services.',
        child: Form(
          key: _formKey,
          child: AutofillGroup(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.stretch,
              children: [
                const BrandLockup(),
                const SizedBox(height: 30),
                Text(
                  'Create your account',
                  style: Theme.of(context).textTheme.headlineMedium,
                ),
                const SizedBox(height: 8),
                Text(
                  'Join Xplore and build your first personalized journey.',
                  style: Theme.of(context).textTheme.bodyMedium?.copyWith(
                    color: Theme.of(context).colorScheme.onSurfaceVariant,
                  ),
                ),
                const SizedBox(height: 24),
                FormStatusBanner(error: _error, success: _success),
                AuthField(
                  controller: _nameController,
                  label: 'Full name',
                  hint: 'Your travel profile name',
                  icon: Icons.person_outline_rounded,
                  textInputAction: TextInputAction.next,
                  autofillHints: const [AutofillHints.name],
                  validator: (value) =>
                      AuthValidators.requiredText(value, 'Name'),
                ),
                const SizedBox(height: 14),
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
                  hint: '8+ characters with a number',
                  icon: Icons.lock_outline_rounded,
                  obscureText: _obscurePassword,
                  textInputAction: TextInputAction.done,
                  autofillHints: const [AutofillHints.newPassword],
                  validator: AuthValidators.strongPassword,
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
                  crossAxisAlignment: CrossAxisAlignment.center,
                  children: [
                    Checkbox(
                      value: _acceptsTerms,
                      onChanged: (value) {
                        setState(() => _acceptsTerms = value ?? false);
                      },
                    ),
                    const Expanded(
                      child: Text(
                        'I agree to travel updates and privacy terms',
                      ),
                    ),
                  ],
                ),
                const SizedBox(height: 12),
                AuthButton(
                  label: 'Create Account',
                  loadingLabel: 'Mapping profile...',
                  isLoading: _loading,
                  onPressed: _submit,
                ),
                const SizedBox(height: 22),
                const SocialButton(label: 'Sign up with Google'),
                const SizedBox(height: 22),
                Wrap(
                  alignment: WrapAlignment.center,
                  crossAxisAlignment: WrapCrossAlignment.center,
                  spacing: 2,
                  children: [
                    Text(
                      'Already exploring?',
                      style: TextStyle(
                        color: Theme.of(context).colorScheme.onSurfaceVariant,
                      ),
                    ),
                    TextButton(
                      onPressed: _loading ? null : widget.onSignIn,
                      child: const Text('Sign in'),
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
