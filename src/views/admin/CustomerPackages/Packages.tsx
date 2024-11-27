'use client';
import { CircularProgress, IconButton, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { CreditDetailBox, NoPackageBox, PackageBox, PackageCreditDetailBox, TagLable } from './CustomerPackage.styled';
import UINewTypography from 'components/UIComponents/UINewTypography';
import { AdminPackagesRes } from 'services/adminCustomerPackages/adminCustomerPackages.services';
import { UserLoaderBox } from '../UsersPage/UpsertPage.styled';

function Packages({
  packages,
  handelEditPackages,
  handelDeletePackages,
  UpdatePermission,
  isLoading
}: {
  packages: AdminPackagesRes[];
  handelEditPackages: (item: AdminPackagesRes) => void;
  handelDeletePackages: (item: AdminPackagesRes) => void;
  UpdatePermission: boolean;
  isLoading: boolean;
}) {
  return (
    <>
      {isLoading ? (
        <UserLoaderBox>
          <CircularProgress />
        </UserLoaderBox>
      ) : (
        <Grid container rowSpacing={3} columnSpacing={{ xs: 1 }}>
          {packages && packages?.length > 0 ? (
            packages?.map((item, index) => (
              <Grid item xs={6} sm={4} md={3} lg={2} key={index}>
                <Card sx={{ maxWidth: '180px' }}>
                  <Paper sx={{ overflow: 'hidden' }}>
                    <PackageBox>
                      <Box>Package {index + 1}</Box>
                      <PackageCreditDetailBox>
                        <TagLable sx={{ backgroundColor: item?.tag ? '#D12288' : '#AAAAAA' }}>
                          {item?.tag ? item?.tag : 'No tag added'}
                        </TagLable>
                        <CreditDetailBox>
                          <Typography variant="h6" sx={{ fontWeight: 800 }}>
                            {item.credits} Credits
                          </Typography>
                          <UINewTypography variant="bodySmall">No. of credits</UINewTypography>
                        </CreditDetailBox>
                        <CreditDetailBox>
                          <Typography variant="h6" sx={{ fontWeight: 800 }}>
                            $ {item.amount}
                          </Typography>
                          <UINewTypography variant="bodySmall">Price</UINewTypography>
                        </CreditDetailBox>
                      </PackageCreditDetailBox>
                      {UpdatePermission && (
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                          <Button
                            variant="text"
                            size="small"
                            sx={{ justifyContent: 'start', padding: 0 }}
                            onClick={() => {
                              handelEditPackages(item);
                            }}
                          >
                            Edit
                          </Button>
                          <IconButton
                            size="small"
                            onClick={() => {
                              handelDeletePackages(item);
                            }}
                          >
                            <Box component="img" src="/images/icons/delete-red.svg" width={20} height={20} alt="Delete" />
                          </IconButton>
                        </Box>
                      )}
                    </PackageBox>
                  </Paper>
                </Card>
              </Grid>
            ))
          ) : (
            <Grid xs={12}>
              <NoPackageBox>
                <Typography variant="h5" sx={{ fontWeight: 400 }}>
                  No packages found
                </Typography>
              </NoPackageBox>
            </Grid>
          )}
        </Grid>
      )}
    </>
  );
}

export default Packages;
