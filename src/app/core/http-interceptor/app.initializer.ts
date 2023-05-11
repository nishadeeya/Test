// import { AuthService } from '../../_core/service/auth.service';
// import { SecureStorageService } from '../../_core/service/secure-storage.service';

// export function appInitializer(authService: AuthService, secureStorageService: SecureStorageService) {
//     return () => new Promise<void>(resolve => {
//       console.log('log',resolve);
//       let refreshToken = secureStorageService.getSecureStorage('refreshToken');
//         if (refreshToken) {
//             authService.refreshToken()
//                 .subscribe()
//                 .add(resolve);
//         } else {
//             resolve(null);
//         }
//     });
// }
