import * as os from '@pulumi/openstack';

const instance = new os.compute.Instance('instance', {
  flavorName: 's1-2',
  imageName: 'Ubuntu 16.04',
});

export const bucketName = instance.id;
