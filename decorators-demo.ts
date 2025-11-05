function logResult(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
        const result = originalMethod.apply(this, args);
        console.log(result);
        return result;
    }
    return descriptor;
}

class UserService {
    @logResult
    updateUser(input: any) {
        const result = {
            ...input,
            updatedAt: new Date(),
        }
        // ... update logic
        return result;
    }
    @logResult
    getUser() {
        const result = 'test';
        return result;
    }
}

const user = new UserService();
user.updateUser({ name: "Ali" });
user.getUser();